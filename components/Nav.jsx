import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav (){
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <nav className="py-4 px-4">
            <div className=" w-full px-4 flex flex-wrap lg:flex-nowrap items-center">
                <div className="w-48 lg:mr-48 relative flex lg:justify-start ">
                    <button
                    className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <GiHamburgerMenu />
                    </button>
                    <p className="text-blue-400 font-semibold text-center">HEALTH EXPLORE</p>
                </div>
                <div className={`lg:flex w-full justify-between ${navbarOpen ? 'mt-2 flex justify-center flex-col lg:flex-row list-none ' : 'hidden'}`}>
                    <div className="flex flex-col lg:flex-row">
                        <button className="lg:mr-8 text-sm font-medium ">PROFILE</button>
                        <button className="lg:mr-8 text-sm font-medium">JOBS</button>
                        <button className="lg:mr-8 text-sm font-medium">PROFESSIONAL NETWORK</button>
                        <button className="lg:mr-8 text-sm font-medium">LOUNGE</button>
                        <button className="lg:mr-8 text-sm font-medium">SALARY</button>
                    </div>
                    <button className="border-blue-500 text-sm font-bold text-blue-500 hover:bg-blue-500 hover:text-white border border-myred py-2 px-4 rounded-lg hidden lg:block">CREATE JOB</button>
                    <button className="text-sm mt-2 lg:text-base font-medium text-center self-center lg:hidden">CREATE JOB</button>
                    <button className="text-sm lg:text-base font-medium text-center self-center">LOGOUT</button>
                </div>
            </div>
        </nav>
    )
}