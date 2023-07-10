const Logo: React.FC = () => {
  return (
    <>
        <button className="bg-none cursor-pointer inline-block flex-shrink-0 text-2xl py-1 px-1 relative text-black no-underline z-10 font-bold
            before:bg-green-400 before:h-full before:absolute before:w-full before:-z-10 before:top-3 before:right-3
            after:border-black after:border-solid after:border-2 after:h-full after:opacity-100 after:absolute after:top-0 after:right-0 after:w-full
            hover:before:translate-x-3 hover:before:-translate-y-3 
            hover:after:-translate-x-3 hover:after:translate-y-3 
            hover:before:transition-transform hover:before:duration-500 hover:before:ease-in
            hover:after:transition-transform hover:after:duration-500 hover:after:ease-in
            after:transition-transform after:duration-500
            before:transition-transform before:duration-500
            ">NutriAi
        </button>
    </>
  )
}

export default Logo