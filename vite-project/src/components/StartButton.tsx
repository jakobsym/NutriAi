import React from 'react'

const StartButton: React.FC = () => {
  return (
    <div className="flex justify-center">
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-green-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">Hover me!</span>
      </button>
    </div>
  )
}

export default StartButton