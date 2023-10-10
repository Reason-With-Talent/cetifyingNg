import Award from "../assets/img/Award.svg"
import Certibg from "../assets/img/Certibg.svg"
const Certificate = () => {
    return (
        <>
            <section className="bg-[#7853F1CC] grid md:flex md:justify-between md:px-[100px] px-[10px] md:pt-[100px] pt-[20px] pb-[50px] md:pb-[70px] bg-[url('assets/img/Certibg.svg')] bg-no-repeat">
                <div className="md:pt-[30px] pt-[20px]">
                    <h2 className="text-[#EFEBFF] font-semibold text-[20px] md:w-[45%] w-[100%]  pb-[15px]">Would you like to deploy your existing Certificate?</h2>
                    <p className="text-[#EFEBFF] md:w-[55%] font-light w-[100%] text-[18px] md:pt-[25px] md:pb-[20px]">You don’t have to change your existing design. we got you covered for this</p>
                    <button className="flex justify-center bg-[#EFEBFF] p-[15px] md:w-[40%] rounded-lg text-[#7853F1] text-md w-[100%] md:mt-[50px] mt-[20px]">Contact Us</button>
                </div>
                <div className="pt-[30px] md:pt-[0px]">
                    <img src={Award} />
                </div>
            </section>
        </>
    )
}
export default Certificate;