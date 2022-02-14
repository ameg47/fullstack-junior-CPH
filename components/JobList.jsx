import { useState } from "react"
import Job from "./Job"

export default function JobList ({name, jobs}){
    const [showList, setShowlist]= useState(false)

    const show = ()=>{
        setShowlist(!showList)
    }

    return(
        <div className="px-6 py-2 hover:cursor-pointer" >
            <div className="flex" onClick={show}>
                <div className="bg-gray-300 w-8 p-1 mr-2 rounded-lg text-white font-medium text-lg">LO</div>
                <p className="flex self-center">{jobs.length} jobs for {name}</p>
            </div>
            <div className={`${showList ? "grid grid-cols-1 divide-y" : "hidden"}`}>
                {jobs && jobs.map((job, index)=>{
                    return <Job key={index} 
                                title={job.job_title}
                                type={job.job_type}
                                salary={job.salary_range}
                                city={job.city}
                                department={job.department}
                                hours={job.hours}
                                schedule={job.work_schedule}
                                description={job.description}
                                experience={job.experience}
                        />
                })
                }
            </div>
        </div>
    )
}