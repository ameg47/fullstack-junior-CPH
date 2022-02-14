import { useEffect, useState } from 'react';
import JobList from './JobList';
import { locasc, locdes, SortFunc} from '../functions/sortFunctions';
import { FiSearch } from 'react-icons/fi'

export default function Home(){
    const[jobs, setJobs]=useState()
    const[filters, setFilters]=useState()
    const[search, setSearch]= useState()
    const[query, setQuery]= useState({type:"",dep:"",exp:"",sched:"", search:""})
    const[sort, setSort]= useState({loc:"", role:"",exp:"",dep:""})
    const[showModal, setShowModal] = useState(false);
    
  
    useEffect(() => {
      fetch('api/jobs')
        .then((res) => res.json())
        .then((data) => {
          setJobs(data.jobs)
        })
      fetch('api/filters')
        .then((res) => res.json())
        .then((data) => {
          setFilters(data)
        })
    }, []);

    const handleChange = (e)=>{
      setSearch(e.target.value)
    }

    const clickFilter= async (e)=>{
      let {name, value}= e.target
      setQuery({...query, [name]:value})
      value= encodeURIComponent(value)
      let Url=`api/jobs?${name}=${value}&`
      for(let key in query){
        if(name!==key)Url+=`${key}=${query[key]}&`
      }
      await fetch(Url)
        .then((res) => res.json())
        .then((data) => {
          for(let key in sort){
            if(sort[key]){
              if(key==="loc") data.jobs.sort(SortFunc[sort[key]])
              else data.jobs.forEach(e=>e.items.sort(SortFunc[sort[key]]))
            }
          }
          setJobs(data.jobs)
        })
    }

    const clickSearch= async (e)=>{
      e.preventDefault();
      setQuery({...query, search:search})
      let Url=`api/jobs?search=${search}&`
      for(let key in query){
        if("search"!==key)Url+=`${key}=${query[key]}&`
      }
      await fetch(Url)
        .then((res) => res.json())
        .then((data) => {
          for(let key in sort){
            if(sort[key]){
              if(key==="loc") data.jobs.sort(SortFunc[sort[key]])
              else data.jobs.forEach(e=>e.items.sort(SortFunc[sort[key]]))
            }
          }
          setJobs(data.jobs)
        })
      
    }

    const changeSort= (e)=>{
      let {name, value}= e.target
      setSort({...sort, [name]:value})

      if(sort.role)jobs.forEach(e=>e.items.sort(SortFunc[sort.role]))
      if(value==="locasc")jobs.sort(locasc)
      if(value==="locdes")jobs.sort(locdes)
      else{
        jobs.forEach(e=>e.items.sort(SortFunc[value]))
      }
      
      for(let key in sort){
        if(key!=="role" && key!==name){
          jobs.forEach(e=>e.items.sort(SortFunc[sort[key]]))
        }
      }
    }

    return(
        <div className='bg-gray-100 md:px-4'>
            <form onSubmit={clickSearch} className="w-full">
              <label>
                <input 
                    type="text"
                    className="p-4 md:my-6 my-1 w-5/6 md:w-11/12"
                    onChange={handleChange}
                    name="search"
                    placeholder='Search for any job, title, keyword or company'
                />
              </label>
              <button type="submit" className='bg-white p-4 border-l-2 border-gray-200 text-center w-1/6 md:w-1/12'>
                  <FiSearch className='inline'/>
                </button>
            </form>
            <div className='md:grid grid-cols-5 pb-8'>
                <div className='col-span-1 mr-4 hidden md:block'>
                  <div className='bg-white px-3 py-2 mb-4'>
                    <p className='font-medium'>JOB TYPE</p>
                    <ul>
                      {filters && filters.job_type.map((e, index) => {
                            return(<li className='my-1' key={index}>
                                      <button className={`text-sm mr-2 ${query.type===e.key ? "font-bold" : null}`}
                                        onClick={clickFilter} 
                                        name="type" 
                                        value={query.type!==e.key? e.key : ""}> 
                                          {e.key}
                                      </button>
                                      <span className='text-xs text-gray-500' >{e.doc_count}</span>
                                  </li>)
                      })}
                    </ul>
                  </div>
                  <div className='bg-white px-3 py-2 mb-4'>
                    <p className='font-medium'>DEPARTMENT</p>
                    <ul>
                      {filters && filters.department.slice(0, 7).map((e, index) => {
                            return(<li className='my-1' key={index}>
                                    <button className={`text-sm text-left ${query.dep===e.key ? "font-bold" : null}`}
                                      onClick={clickFilter} 
                                      name="dep" 
                                      value={query.dep!==e.key? e.key : ""}> 
                                        {e.key}
                                      </button>
                                    <span className='text-xs ml-2 text-gray-500'>{e.doc_count}</span>
                                  </li>)
                      })}
                    </ul>
                    <button className='text-xs text-blue-500' onClick={() => setShowModal(true)}>Show more</button>
                    {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between py-2 px-4 border-b border-solid border-blueGray-200 rounded-t">
                              <p className="flex self-center font-semibold">Department</p>
                              <button
                                className="p-1 ml-auto bg-transparent text-black float-right font-semibold"
                                onClick={() => setShowModal(false)}
                              > X </button>
                            </div>
                            <div className="relative p-4 flex-auto">
                              <ul className='grid grid-cols-4 space-x-2'>
                                {filters && filters.department.map((e, index) => {
                                      return(<li className='my-1' key={index}>
                                              <button className={`text-sm text-left ${query.dep===e.key ? "font-bold" : null}`}
                                                onClick={clickFilter} 
                                                name="dep" 
                                                value={query.dep!==e.key? e.key : ""}> 
                                                  {e.key}
                                                </button>
                                              <span className='text-xs ml-2 text-gray-500'>{e.doc_count}</span>
                                            </li>)
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  </div>
                  <div className='bg-white px-3 py-2 mb-4'>
                    <p className='font-medium'>WORK SCHEDULE</p>
                    <ul>
                      {filters && filters.work_schedule.map((e, index) => {
                            return(<li className='my-1' key={index}>
                                    <button className={`text-sm mr-2 ${query.sched===e.key ? "font-bold" : null}`}
                                      onClick={clickFilter} 
                                      name="sched" 
                                      value={query.sched!==e.key? e.key : ""}> 
                                        {e.key}
                                      </button>
                                    <span className='text-xs text-gray-500'>{e.doc_count}</span>
                                  </li>)
                      })}
                    </ul>
                  </div>
                  <div className='bg-white px-3 py-2 mb-4'>
                    <p className='font-medium'>EXPERIENCE</p>
                    <ul>
                      {filters && filters.experience.map((e, index) => {
                            return(<li className='my-1' key={index}>
                                    <button className={`text-sm mr-2 ${query.exp===e.key ? "font-bold" : null}`}
                                      onClick={clickFilter} 
                                      name="exp" 
                                      value={query.exp!==e.key? e.key : ""}> 
                                        {e.key}
                                      </button>
                                    <span className='text-xs text-gray-500'>{e.doc_count}</span>
                                  </li>)
                      })}
                    </ul>
                  </div>
                </div>
                <div className='col-span-4 bg-white '>
                  <div className='py-4 px-4 hidden md:flex justify-end'>
                    <span className='text-gray-500 mr-3'>Sort by</span>
                    <select onChange={changeSort} name="loc" className='appearance-none px-2'>
                      <option value="">Location</option>
                      <option value="locasc">Location &#x2191;</option>
                      <option value="locdes">Location &#x2193;</option>
                    </select>
                    <select onChange={changeSort} name="role" className='appearance-none px-2'>
                      <option value="">Role</option>
                      <option value="roleasc">Role &#x2191;</option>
                      <option value="roledes">Role &#x2193;</option>
                    </select>
                    <select onChange={changeSort} name="dep" className='appearance-none px-2'>
                      <option value="">Department</option>
                      <option value="depasc">Department &#x2191;</option>
                      <option value="depdes">Department &#x2193;</option>
                    </select>
                    <select onChange={changeSort} name="exp" className='appearance-none px-2'>
                      <option value="">Experience</option>
                      <option value="expasc">Experience &#x2191;</option>
                      <option value="expdes">Experience &#x2193;</option>
                    </select>
                  </div>
                    {jobs && jobs.length===0 ? 
                      <p className='text-xl text-center py-10'>No results</p>
                            :
                      <ul className='mb-6'>
                        {jobs && jobs.map((e, index) => {
                            return(<li key={index}><JobList name={e.name} jobs={e.items}/></li>)
                        })}
                    </ul>}
                </div>
            </div>
        </div>
    )
}