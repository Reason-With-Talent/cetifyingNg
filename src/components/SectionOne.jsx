import certificate from "../assets/img/Certificate.png"
import bodybg from "../assets/img/bodybg.svg"
const SectionOne = () => {
    return (
        <>
            <section className="bg-[url('assets/img/bodybg.svg')] bg-auto md:mt-[50px] mt-[50px]">
                <section className="grid md:flex md:pt-[150px] pt-[20px] md:px-[100px] px-[10px]">
                    <img src={certificate} />
                    <div className="md:pt-[100px] pt-[20px]">
                        <h5 className="text-[#2D1D60] font-medium text-[18px] md:w-[40%] w-[100%]  pb-[15px]">You can authomate 100s of beautiful Certificates within the shortest time possible</h5>
                        <p className="text-[#2D1D6080] md:w-[50%] font-normal w-[100%] text-[15px]">Are you looking for the fastest way to generate, host and send multiples of shareable Certificates to your Trainees or participants?.</p>
                    </div>
                </section>
            </section>
        </>
    )
}
export default SectionOne;