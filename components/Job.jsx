import { useState } from "react"

export default function Job ({title, type, salary, city, department, hours, schedule, description, experience}){
    const [opened, setOpened]= useState(false)

    const open = ()=>{
        setOpened(!opened)
    }

    return(
        <div className="py-2">
            <div className="my-1 flex justify-between" onClick={open}>
                <div className="hover:cursor-pointer">
                    <p className="font-semibold">{title}</p>
                    <p>{type} | {experience} | ${salary[0]} - ${salary[1]} an hour | {city}</p>
                </div>
                <span>4 weeks ago</span>
            </div>
            <div className={`${opened ? "grid grid-cols-6" : "hidden"}`}>
                <div className="grid col-span-5 grid-row">
                    <div className="grid grid-cols-2 my-1">
                        <p className="font-medium">Department:</p>
                        <p>{department.map(e=> department.indexOf(e)<department.length-1 ? e+", " : e)}</p>
                    </div>
                    <div className="grid grid-cols-2 my-1">
                        <p className="font-medium">Hours / shifts:</p>
                        <p>{hours} / {schedule}</p>
                    </div>
                    <div className="grid grid-cols-2 my-1">
                        <p className="font-medium">Summary:</p>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="h-full flex flex-col justify-center items-end">
                        <button className="w-24 border-blue-500 text-sm text-blue-500 hover:text-white hover:bg-blue-500 border border-myred py-2 px-2 rounded-lg lg:mb-2">
                            Job details
                        </button>
                        <button className="w-24 border-blue-500 text-sm text-blue-500 hover:text-white hover:bg-blue-500 border border-myred py-2 px-2 rounded-lg">
                            Save job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}