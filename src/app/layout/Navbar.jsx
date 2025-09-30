"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname()

    console.log('checking path name', pathname);

    const navgicaton = [
        {
            "id": "1",
            "name": "Home",
            "path": "/"
        },
        {
            "id": "2",
            "name": "Shop",
            "path": "/shop"
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
            <nav className={` z-50 w-full lg:px-20 px-3 flex justify-between py-3 font-rubik font-[200] border-b border-[#bbb]`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>ShopZone</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
                        {
                            navgicaton.map((navi) => (
                                <Link to={navi.path} className={`${pathname == navi.path && "text-[#3B3B98]"} hover:text-[#3B3B98]`} key={navi.id} href={navi.path}>
                                    <li className='font-rubik'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-full flex items-center gap-5  mx-10">
                    <div className="w-full">
                        <input className="input w-full focus:outline-0 border-[1.8px] border-[#3B3B98]" placeholder="Search Your Product." type="text" />
                    </div>
                    <div className="relative text-2xl text-[#3B3B98] font-bold cursor-pointer">
                        <FaShoppingCart />
                        <div className="absolute -top-2 -right-4 border rounded-full flex justify-center items-center text-[15px] bg-[#3B3B98] text-white w-5 h-5">
                            <p>1</p>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <p>Login</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    <FaBars onClick={handleToggle} className='lg:hidden' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-[300] translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {
                        navgicaton.map((navi) => (
                            <Link className={`${pathname == navi.path && "text-white border-b-2 border-[#000000]"} hover:text-[#3B3B98]`} key={navi.id} href={navi.path}>
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