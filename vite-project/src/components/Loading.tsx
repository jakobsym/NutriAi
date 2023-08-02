import React from 'react'

type LoadingProps = {
    size:number,
}
//TODO: Still need to center this loading module
const Loading: React.FC<LoadingProps> = ({size}) => {
  return (
    <div className="w-[50%] h-10 space-x-4 flex items-center justify-center">
        <div style={{ width: `${size}px`, height: `${size}px` }} className="animate-spin ">
            <div className="h-full w-full border-4 border-t-zinc-800 border-b-black rounded-[50%]"></div>
        </div>
    </div>
  )
}

export default Loading