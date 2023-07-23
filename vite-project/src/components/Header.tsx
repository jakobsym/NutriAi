import React from 'react';
import Logo from './Logo';
import AboutButton from './AboutButton';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='text-gray-600'>  {/* apply font-serif to entire page */}
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a href="" className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <Logo />
               {/*  <img src={nutriaiLogo} alt="Image of NutriAi logo" className='h-16 w-45 rounded-xl' /> */}
            </a>
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                <a className='mr-5 text-black hover:text-gray-900 cursor-pointer "'></a>
                <a className="mr-5 hover:text-gray-900 text-black cursor-pointer"></a>
            </nav>
            <Link to="/about"> <AboutButton /></Link>
        </div>
    </header>
  )
}
export default Header;