
const About:React.FC = () => {

  return (
    <a href="#"className="group relative inline-block overflow-hidden rounded border border-neutral-100 bg-neutral-100  px-12 py-3 text-sm font-medium text-slate-800 focus:outline-none active:bg-sky-400 active:opacity-80 active:text-black">
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-200 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-200 group-hover:h-full"></span>
        About
    </a>
  )
}

export default About