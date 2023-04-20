import React from 'react'

function SuccessDescription({title,description,reverse,img}:SuccessDescProp) {
  return (
    <div className={`md:flex justify-between ${reverse?'flex-row-reverse':''} mt-32`}>
        <img className=" h-80 w-80 flex-2"src={img} alt="" />
      <div className={` ${reverse?'text-left':'text-right'} w-2/5`}>
        <div className='text-black font-bold text-3xl mb-10'>{title}</div>
        <p className=''>{description}</p>
      </div>
    </div>
  )
}

export default SuccessDescription

