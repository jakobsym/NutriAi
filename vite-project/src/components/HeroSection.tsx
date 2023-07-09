import React from 'react'
import StartButton from './StartButton'

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">Meet NutriAi</h1>
            <p className="mb-8 leading-relaxed opacity-50 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, sit ut fermentum posuere platea. Cras turpis adipiscing varius id sed leo morbi. Morbi amet, lectus pretium et vitae duis lectus in lorem. 
            </p>
            <StartButton />
        </div>
    </div>
  )
}

export default HeroSection