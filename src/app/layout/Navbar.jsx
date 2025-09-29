"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const pathname = useParams()

    console.log(pathname);

    const navgicaton = [
        {
            "id": "1",
            "name": "Home",
            "path": "/"
        },
        {
            "id": "2",
            "name": "Patients",
            "path": "/patients"
        },
        {
            "id": "3",
            "name": "About",
            "path": "/about"
        },

    ]

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div className={`${isSticky ? "sticky top-0 z-50 bg-[#ffffffb9] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100" : "bg-white"}`}>
            <nav className={` z-50 w-full lg:px-20 px-3 flex justify-between py-3 font-roboto font-[200] border border-[#bbb]`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>ShopZone</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
                        {
                            navgicaton.map((navi) => (
                                <Link to={navi.path} className={`${pathname == navi.path && "text-[#307bc4]"} hover:text-[#307bc4]`} key={navi.id} href={navi.path}>
                                    <li className='font-rubik'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    <IoSearchOutline className='hidden lg:flex' />
                    <div>
                        <Link href={"/signin"}>
                            <button className='btn w-32 bg-[#307bc4] border-0 text-white font-rubik'>Login</button>
                        </Link>
                    </div>
                    <FaBars onClick={handleToggle} className='lg:hidden' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-[300] translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {
                        navgicaton.map((navi) => (
                            <Link className={`${pathname == navi.path && "text-white border-b-2 border-[#000000]"} hover:text-[#307bc4]`} key={navi.id} href={navi.path}>
                                <li className='font-rubik'>{navi.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;