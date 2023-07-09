import React from 'react'
import nutriaiLogo from '/src/assets/logo.webp'

const Header: React.FC = () => {
  return (
    <header className='text-gray-600'>  {/* apply font-serif to entire page */}
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a href="" className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <img src={nutriaiLogo} alt="Image of NutriAi logo" className='h-16 w-45 rounded-xl' />
            </a>
            
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                <a className='mr-5 text-black hover:text-gray-900 cursor-pointer "'></a>
                <a className="mr-5 hover:text-gray-900 text-black cursor-pointer"></a>
                
            </nav>
            {/* 
            <a className="mr-5  hover:text-gray-950 text-black cursor-pointer hover:shadow-xl">Log-in</a>
            */}
            
            <button className="p-1 border border-black text-1xl text-black rounded-md rounded-tr-none rounded-bl-none outline-none  hover:shadow-xl hover:rounded-none duration-200">
                About
            </button>
            
            {/* 
            <button className="inline-flex items-center bg-blue-500 border-0 py-2 px-5 focus:outline-none  rounded text-base text-white mt-4 hover:bg-opacity-80">
                Sign up
            </button>
            */}
        </div>
    </header>
  )
}
export default Header;