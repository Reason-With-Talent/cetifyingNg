import React from "react";
import { BiMenu } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import logo from "../assets/img/logo (1).svg";
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        if (open) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }

    };
    return (
        <>
            <header className="flex items-center justify-between px-[20px] md:px-[50px] py-[20px] border-b-4">
                <img src={logo} />
                {open ? <BiMenu onClick={handleOpen} className="md:hidden flex text-[30px]" /> :
                    <div className="relative">
                        <FaTimes onClick={handleOpen} className="md:hidden mb-[10px]" />
                        <div className="md:flex md:flex-col items-center gap-[50px]">
                            <ul className="md:flex md:gap-[50px] text-sm">
                                <li className="cursor-pointer pb-[10px]">Home</li>
                                <li className="cursor-pointer pb-[10px]">Contact</li>
                                <li className="cursor-pointer pb-[10px]">Price</li>
                                <li className="cursor-pointer pb-[10px]">FAQ</li>
                                <li className="cursor-pointer pb-[10px]">Login</li>
                            </ul>
                            <button className="bg-[#7853F1] p-[10px] rounded-lg text-white text-sm">Template</button>
                        </div>
                    </div>
                }
                <div className="md:flex hidden items-center gap-[50px]">
                    <ul className="md:flex md: gap-[70px] text-sm">
                        <li className="cursor-pointer ">Home</li>
                        <li className="cursor-pointer ">Contact</li>
                        <li className="cursor-pointer ">Price</li>
                        <li className="cursor-pointer ">FAQ</li>
                        <li className="cursor-pointer ">Login</li>
                    </ul>
                    <button className="bg-[#7853F1] p-[10px] rounded-lg text-white text-sm">Template</button>
                </div>
            </header>
        </>
    )
};
export default Header;