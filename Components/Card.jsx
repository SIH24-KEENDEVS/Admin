import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-[80%] text-white bg-[#18171C] flex flex-col items-center justify-between p-8 rounded-xl h-[30vh]'>
       <div className="flex flex-col w-full ">
        <h1 className='text-3xl'>{data?.heading}</h1>
        <p>{data?.dets}</p>
       </div>
       <div className="flex items-center justify-between w-full font-semibold">
        <h1 className='text-4xl'>{data?.no}</h1>
        <i className={data?.icon}></i>
       </div>
    </div>
  )
}

export default Card