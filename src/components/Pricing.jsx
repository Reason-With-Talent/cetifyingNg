import Pricebg from "../assets/img/Pricebg.svg"
import Basic from "../assets/img/Basic.svg"
import Professional from "../assets/img/Professional.svg"
import Enterprise from "../assets/img/Enterprise.svg"
import Question from "../assets/img/Questions.svg"
import { AiOutlineRight } from "react-icons/ai"
const Pricing = () => {
    return (
        <>
            <section className="bg-[url('assets/img/Pricebg.svg')] bg-contain bg-cover bg-no-repeat ">
                <section className="md:px-[100px] px-[10px] md:pb-[50px] pb-[50px]">
                    <div className="text-center md:pt-[100px] pt-[20px]">
                        <h2 className="text-[#2D1D60] font-semibold text-[25px] pb-[15px]">PRICING</h2>
                        <p className="text-[#02020280] font-light text-[18px] pb-[15px]">Choose Subscription Plan</p>
                    </div>
                    <div className="grid md:flex md:justify-between justify-center pt-[30px] md:pt-[50px]">
                        <div>
                            <div className="border-2 p-[20px] border-[#7853F1] rounded-2xl mb-[30px] md:mb-[10px]">
                                <img src={Basic} />
                            </div>
                            <button className="flex justify-center border-2 border-[#9375F4] p-[15px] rounded-xl text-[#0EE99C] text-md w-[100%] md:mt-[30px] mt-[0px] mb-[40px]">Active</button>
                        </div>
                        <div>
                            <div className="border-[#2D1D60] border-2 p-[20px] rounded-2xl mb-[30px] md:mb-[10px]">
                                <img src={Professional} />
                            </div>
                            <button className="flex justify-center bg-[#9375F4] p-[15px] rounded-xl text-[#FFFFFF] text-md w-[100%] md:mt-[30px] mt-[0px] mb-[40px]">Subscribe</button>
                        </div>
                        <div>
                            <div className="border-[#2D1D60] border-2 p-[20px] rounded-2xl mb-[30px] md:mb-[10px]">
                                <img src={Enterprise} />
                            </div>
                            <button className="flex justify-center bg-[#9375F4] p-[15px] rounded-xl text-[#FFFFFF] text-md w-[100%] md:mt-[30px] mt-[0px] mb-[40px]">Subscribe</button>
                        </div>
                    </div>

                </section>
                <div className="border-b-2 border-[#2D1D604D]"></div>
                <section className="md:px-[100px] px-[10px] md:pb-[50px] pb-[50px]">
                    <div className="md:w-[20%] m-auto pt-[50px]">
                        <h1 className="text-[#2D1D60] font-semibold text-[25px] text-center pb-[15px] ">FREQUENTLY ASKED QUESTIONS</h1>
                    </div>
                    <div className="grid justify-center pt-[40px] md:flex">
                        <div className="md:pr-[30px]">
                            <div className="shadow-2xl md:bg-[#FFFFFF] bg-[red;] shadow-none flex md:w-[500px] w-[410px] h-[120px] md:h-[150px] mb-[30px]">
                                <p className="text-[#2D1D60;] text-[18px] font-medium m-auto text-center md:p-[0px] p-[10px] md:w-[58%]"> Can I automate multiple certificates at once to different users?</p>
                                <AiOutlineRight className="text-[40px] md:mt-[50px] mt-[40px] md:pr-[0px]" />
                            </div>
                            <div className="shadow-2xl md:bg-[#FFFFFF] bg-[red;] shadow-none flex md:w-[500px] md:h-[150px] w-[410px] h-[120px] mb-[30px]">
                                <p className="text-[#2D1D60;] text-[18px] font-medium m-auto text-center md:w-[58%]"> Which platforms are supported?</p>
                                <AiOutlineRight className="text-[40px] md:mt-[50px] mt-[40px] md:pr-[0px]" />
                            </div>
                            <div className="shadow-2xl md:bg-[#FFFFFF] bg-[red;] shadow-none flex md:w-[500px] md:h-[150px] h-[120px] w-[410px] mb-[30px]">
                                <p className="text-[#2D1D60;] text-[18px] font-medium m-auto text-center md:w-[58%]"> Does Certifying support external Sheet integrations?</p>
                                <AiOutlineRight className="text-[40px] md:mt-[50px] mt-[40px] md:pr-[0px]" />
                            </div>
                        </div>
                        <div className="md:pl-[30px]">
                            <div className="shadow-2xl md:bg-[#FFFFFF] bg-[red;] shadow-none flex md:w-[500px] md:h-[150px] h-[120px] w-[410px] mb-[30px]">
                                <p className="text-[#2D1D60;] text-[18px] font-medium m-auto text-center md:w-[58%]"> Is the Application Free?</p>
                                <AiOutlineRight className="text-[40px] md:mt-[50px] mt-[40px] md:pr-[0px]" />
                            </div>
                            <div className="shadow-2xl md:bg-[#FFFFFF] bg-[red;] shadow-none flex md:w-[500px] md:h-[150px] h-[120px] w-[410px] mb-[30px]">
                                <p className="text-[#2D1D60;] text-[18px] font-medium m-auto text-center md:w-[58%]">Can I customize the Template?</p>
                                <AiOutlineRight className="text-[40px] md:mt-[50px] mt-[40px] md:pr-[0px]" />
                            </div>
                            <div className="shadow-2xl md:bg-[#FFFFFF] bg-[red;] shadow-none flex md:w-[500px] md:h-[150px] h-[120px] w-[410px] mb-[30px]">
                                <p className="text-[#2D1D60;] text-[18px] font-medium m-auto text-center md:w-[58%]"> Can I use an existing Design?</p>
                                <AiOutlineRight className="text-[40px] md:mt-[50px] mt-[40px] md:pr-[0px]" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Pricing;