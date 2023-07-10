
const About:React.FC = () => {

  return (
    <a href="#"className="group relative inline-block overflow-hidden rounded border border-neutral-100 bg-neutral-100  px-12 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-green-600 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-green-600 transition-all duration-200 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-green-600 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-green-600 transition-all duration-200 group-hover:h-full"></span>
        About
    </a>
  )
  {/* 
  return (
    <>
        <button className="bg-none cursor-pointer inline-block flex-shrink-0 text-2xl py-1 px-1 relative text-black no-underline z-10 font-bold
            before:bg-white before:h-full before:absolute before:w-full before:-z-10 before:top-3 before:right-3
            after:border-gray-800 after:border-solid after:border-2 after:h-full after:opacity-100 after:absolute after:top-0 after:right-0 after:w-full
            hover:before:translate-x-3 hover:before:-translate-y-3
            hover:after:-translate-x-3 hover:after:translate-y-3
            hover:before:transition-transform hover:before:duration-500 hover:before:ease-in
            hover:after:transition-transform hover:after:duration-500 hover:after:ease-in
            after:transition-transform after:duration-500
            before:transition-transform before:duration-500
            ">About
        </button>
    </>
  )
*/}
}

export default About