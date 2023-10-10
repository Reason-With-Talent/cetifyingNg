import Message from "../assets/img/Message.svg"
import HeadSet from "../assets/img/HeadSet.svg"
import logo from "../assets/img/logo (2).svg";
import { BsTwitter } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { AiFillFacebook } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
const Footer = () => {
    return (
        <>
            <footer className="bg-[#9375F4] md:px-[100px] px-[10px] pt-[70px] pb-[70px]">
                <section className="md:flex md:justify-between grid justify-center">
                    <div>
                        <h2 className="text-[#FFFFFF] text-[25px] font-semibold pb-[10px]">Company</h2>
                        <h6 className="text-[#FFFFFF] text-[15px] font-normal md:pt-[20px] md:pb-[10px] ">About Us</h6>
                        <h6 className="text-[#FFFFFF] text-[15px] font-normal md:pt-[10px] pt-[5px]">Affilliate</h6>
                    </div>
                    <div>
                        <h2 className="text-[#FFFFFF] text-[25px] font-semibold md:pb-[10px] pt-[20px] md:pt-[0px]">Useful links</h2>
                        <h6 className="text-[#FFFFFF] text-[15px] font-normal md:pt-[10px] pt-[5px]">FAQS</h6>
                        <h6 className="text-[#FFFFFF] text-[15px] font-normal md:pt-[10px] pt-[5px]">Discount Policy</h6>
                        <h6 className="text-[#FFFFFF] text-[15px] font-normal md:pt-[10px] pt-[5px]">Terms and Conditions</h6>
                    </div>
                    <div>
                        <h2 className="text-[#FFFFFF] text-[25px] font-semibold pb-[10px] pt-[20px] md:pt-[0px]">Contact</h2>
                        <div className="flex">
                            <img src={Message} />
                            <h6 className="pl-[10px] text-[#FFFFFF] text-[15px] font-normal">Info@atc.com.ng</h6>
                        </div>
                        <div className="flex md:pt-[20px] pt-[10px]">
                            <img src={HeadSet} />
                            <h6 className="pl-[10px] text-[#FFFFFF] text-[15px] font-normal">+234 903 580 7050</h6>
                        </div>
                    </div>
                </section>
                <div className="border-b-2 border-[#FFFFFF] mt-[50px]"></div>
                <section className="mt-[20px] md:flex md:justify-between grid justify-center">
                    <div className="md:pl-[20px]"><img src={logo} /></div>
                    <div className="flex text-[#FFFFFF] text-[20px] md:mt-[12px] mt-[10px] flex justify-between">
                        <div className="pr-[20px]"><a href="https://www.twitter.com"><BsTwitter /></a></div>
                        <div className="pr-[20px]"> <a href="https://www.whatsapp.com"><BsWhatsapp /></a></div>
                        <div className="pr-[20px]"><a href="https://www.facebook.com"><AiFillFacebook /></a></div>
                        <div className="pr-[20px]"> <a href="https://www.linkedin.com"><BsLinkedin /></a></div>
                        <div className="pr-[20px]"> <a href="https://www.instagram.com"><BsInstagram /></a></div>
                    </div>
                    <div>
                        <p className="text-[#FFFFFF] text-[15px] font-light md:mt-[12px] mt-[15px]">© 2021 ATC Hub, All rights reserved.</p>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer;