import jobs from '../../data/jobs'

export default async (req, res) => {
  res.statusCode = 200
  // @todo: implement filters and search
  let {search, type, dep, sched, exp}= req.query
  if(req.query){
    let jobsCopy=jobs
    if (search){
      let searched=search.toString().split(" ")
      for(let i=0; i<searched.length; i++){
        searched[i]=searched[i].charAt(0).toUpperCase()+ searched[i].slice(1)
        jobsCopy=jobsCopy.map(place=>({...place, items:place.items.filter(job=> 
          job.name.includes(searched[i]) || job.city.includes(searched[i]) || job.job_title.includes(searched[i])
        )}))
      }
    }

    type ? jobsCopy=jobsCopy.map(place=>({...place, items:place.items.filter(job=> job.job_type===type)})) : null
    exp ? jobsCopy=jobsCopy.map(place=>({...place, items:place.items.filter(job=> job.experience===exp)})): null
    dep ? jobsCopy=jobsCopy.map(place=>({...place, items:place.items.filter(job=> job.department.includes(dep))})) : null
    sched ? jobsCopy=jobsCopy.map(place=>({...place, items:place.items.filter(job=> job.work_schedule===sched)})) : null

    let filteredjobs= jobsCopy.filter(elem=> elem.items.length)

    //await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

    return res.json({jobs:filteredjobs})
  }
  

  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  //await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

  res.json({jobs:jobs})
}
