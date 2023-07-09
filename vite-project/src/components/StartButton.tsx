import React from 'react'

const StartButton: React.FC = () => {
  return (
    <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
            Book a demo
        </button>
    </div>
  )
}

export default StartButton