const Button = ({color}) => {
    console.log(color)
    return (
        <>
        <button className={`bg-${color} p-[10px] md:w-[20%] rounded-lg text-black text-md w-[80%] md:mb-[50px] mb-[20px]`}>Get Done</button>
        </>
    )
}
export default Button;