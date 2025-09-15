import React from 'react'

const CommonHead = ({commonh2 , commonp}) => {
  return (
    <>
    
    <div className='flex items-center'>
        <h2 className=' px-[7px] text-center text-[40px] font-medium font-main rounded-[7px] bg-[#B9FF66] text-[#000]'>{commonh2}</h2>
        <p className='text-[18px] font-normal font-main text-[#000]'>{commonp}</p>
    </div>
    
    
    
    
    </>
  )
}

export default CommonHead