import Pricebg from "../assets/img/Pricebg.svg"
import Basic from "../assets/img/Basic.svg"
import Professional from "../assets/img/Professional.svg"
import Enterprise from "../assets/img/Enterprise.svg"
import Question from "../assets/img/Questions.svg"
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
                    <div className="grid justify-center pt-[40px] md:flex md:justify-between">
                        <div>
                            <div className="pb-[20px]">
                                <img src={Question} />
                            </div>
                            <div className="pb-[20px]">
                                <img src={Question} />
                            </div>
                            <div className="pb-[20px]">
                                <img src={Question} />
                            </div>
                        </div>
                        <div>
                            <div className="pb-[20px]">
                                <img src={Question} />
                            </div>
                            <div className="pb-[20px]">
                                <img src={Question} />
                            </div>
                            <div className="pb-[20px]">
                                <img src={Question} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Pricing;