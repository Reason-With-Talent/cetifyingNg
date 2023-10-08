import React from "react";
import {BiMenu} from "react-icons/bi"
import logo from "../assets/img/logo (1).svg";
const Header = () => {
    return(
        <>
        <header className="flex items-center justify-between px-[20px] md:px-[50px] py-[20px] border-b-4 border-black-200 border-b-black-900">
            <img src={logo}/>
            <BiMenu className="md:hidden flex text-[30px]"/>
            <div className="md:flex hidden items-center gap-[50px]">
            <ul className="flex gap-[50px] text-sm">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Price</li>
                <li className="cursor-pointer">FAQ</li>
                <li className="cursor-pointer">Login</li>
            </ul>
            <button className="bg-[#7853F1] p-[10px] rounded-lg text-white text-sm">Template</button>
            </div>
        </header>
        </>
    )
};
export default Header;