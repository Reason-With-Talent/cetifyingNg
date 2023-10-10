import certificate from "../assets/img/Certificate.png"
import bodybg from "../assets/img/bodybg.svg"
import Logos from "../assets/img/logos.svg"
import Excel from "../assets/img/Excel.svg"
import Excel1 from "../assets/img/Excel (1).svg"
const SectionOne = () => {
    return (
        <>
            <section className="bg-[url('assets/img/bodybg.svg')] bg-contain bg-cover mt-[50px]">
                <section className="grid md:flex md:pt-[150px] pt-[75px] pb-[50px] md:pb-[100px] md:px-[100px] px-[10px]">
                    <div className="w-[100%]  flex justify-center">
                        <img src={certificate} />
                    </div>
                    <div className="md:pt-[100px] pt-[20px]">
                        <h2 className="text-[#2D1D60] font-semibold text-[18px] md:w-[45%] w-[100%]  pb-[15px]">You can authomate 100s of beautiful Certificates within the shortest time possible</h2>
                        <p className="text-[#2D1D6080] md:w-[55%] font-normal w-[100%] text-[15px]">Are you looking for the fastest way to generate, host and send multiples of shareable Certificates to your Trainees or participants?.</p>
                    </div>
                </section>
                <section className="grid md:flex md:pt-[200px] pt-[5px] md:px-[90px] px-[10px] pb-[50px] md:pb-[100px]">
                    <div className="md:pt-[100px] pt-[10px]">
                        <h2 className="text-[#2D1D60] font-semibold text-[20px] md:w-[45%] w-[100%]  pb-[15px]">Ability to share, send and save certificates on different medium.</h2>
                        <p className="text-[#2D1D6080] md:w-[55%] font-normal w-[100%] text-[15px] pb-[15px]">Students can save or share their achievement Certificates on Linkedin, Facebook, Twitter, Mails and Drives. </p>
                    </div>
                    <div>
                        <img src={Logos} />
                    </div>
                </section>
                <section className="grid md:flex md:justify-between md:pt-[100px] pt-[40px] md:px-[90px] px-[10px] pb-[50px] md:pb-[100px]">
                    <div>
                        <img src={Excel} />
                    </div>
                    <div className="md:pt-[100px] pt-[30px]">
                        <h2 className="text-[#2D1D60] font-semibold text-[20px] md:w-[45%] w-[100%]  pb-[15px]">Personal Dashboard to track metrics and achievements.</h2>
                        <p className="text-[#2D1D6080] md:w-[55%] font-normal w-[100%] text-[15px] pb-[15px]">You will have access to your Dashboard to view, edit and reuse the existing files or Projects.</p>
                    </div>
                </section>
                <section className="bg-[#C4C4C433] grid md:flex md:px-[90px] px-[10px] md:pt-[100px] pt-[5px] pb-[50px]">
                    <div className="md:pt-[100px] pt-[30px]">
                        <h2 className="text-[#2D1D60] font-semibold text-[25px] md:w-[45%] w-[100%]  pb-[15px]">Easy, Efficient & Fast</h2>
                        <p className="text-[#2D1D6080] md:w-[55%] font-normal w-[100%] text-[15px] pb-[15px]">You can easily Integrate your Excel or Google-Sheet files to generate Multiple Certificates for your Trainees.</p>
                        <button className="flex justify-center bg-[#7853F1] p-[10px] md:w-[50%] rounded-lg text-white text-md w-[100%] md:mt-[20px] mt-[20px]">Get Started</button>
                    </div>
                    <div className="pt-[30px] md:pt-[0px]">
                        <img src={Excel1} />
                    </div>
                </section>
            </section>
        </>
    )
}
export default SectionOne;