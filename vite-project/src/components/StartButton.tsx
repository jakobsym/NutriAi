import React, {useState} from 'react'
//import Quiz from './Quiz'
const StartButton: React.FC = () => {
  const [buttonClick, setButtonClick] = useState(false);

  const handleClick = () => {
    setButtonClick(true);
    //console.log("Clicked: buttonClick = " + buttonClick);
  }
  return (
    <div className="flex flex-col justify-center items-center w-90 h-40">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Choose plan
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
  )
  {/* 
  return (
    <div className="flex flex-col justify-center items-center w-90 h-40">
    <button
        className="relative text-center h-20 w-60 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:transition-all
            before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-black/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
    >
        <span onClick = {handleClick} className="relative text-black uppercase font-thin">Get started</span>
    </button>
  </div>
  )
  */}
}
export default StartButton