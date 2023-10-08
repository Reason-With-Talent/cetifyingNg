import homebg from "../assets/img/homebg.svg"
const GetStarted = () => {
    return (
        <>
            <section className="text-center px-[20px] md:px-[50px] py-[50px] bg-contain bg-cover bg-[url('assets/img/homebg.svg')]">
                <h1 className="text-[#2D1D60] md:text-[55px] font-semibold text-[23px] w-[280px] md:w-[650px] m-auto">Send Unlimited  Customized Certificates.</h1>
                <p className="text-[#2D1D60] md:text-[20px] md:w-[45%] font-normal text-[15px] w-[100%] pt-[30px] pb-[30px] m-auto">Automate your Training Certificate and deploy them within the shortest time possible.</p>
                <button className="bg-[#7853F1] p-[10px] md:w-[20%] rounded-lg text-white text-md w-[80%] md:mb-[50px] mb-[20px]">Get Started</button>
            </section>
        </>
    )
}
export default GetStarted;