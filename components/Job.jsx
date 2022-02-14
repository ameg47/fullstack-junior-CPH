import { useState } from "react"

export default function Job ({title, type, salary, city, department, hours, schedule, description, experience}){
    const [opened, setOpened]= useState(false)

    const open = ()=>{
        setOpened(!opened)
    }

    return(
        <div className="py-2">
            <div className="my-1 md:flex justify-between" onClick={open}>
                <div className="hover:cursor-pointer">
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm md:text-base">{type} | {experience} | ${salary[0]} - ${salary[1]} an hour | {city}</p>
                </div>
                <span className="text-sm md:text-base">4 weeks ago</span>
            </div>
            <div className={`${opened ? "md:grid grid-cols-6" : "hidden"}`}>
                <div className="grid col-span-5 grid-row text-sm md:text-base">
                    <div className="md:grid grid-cols-2 my-1 ">
                        <p className="font-medium">Department:</p>
                        <p>{department.map(e=> department.indexOf(e)<department.length-1 ? e+", " : e)}</p>
                    </div>
                    <div className="md:grid grid-cols-2 my-1">
                        <p className="font-medium">Hours / shifts:</p>
                        <p>{hours} / {schedule}</p>
                    </div>
                    <div className="md:grid grid-cols-2 my-1">
                        <p className="font-medium">Summary</p>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="col-span-1 mt-2">
                    <div className="h-full flex md:flex-col md:justify-center md:items-end">
                        <button className="w-24 border-blue-500 text-sm text-blue-500 hover:text-white hover:bg-blue-500 border border-myred py-2 px-2 rounded-lg md:mb-2">
                            Job details
                        </button>
                        <button className="w-24 border-blue-500 text-sm text-blue-500 hover:text-white hover:bg-blue-500 border border-myred py-2 px-2 rounded-lg ml-2 md:ml-0">
                            Save job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}