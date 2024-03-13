import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black text-white'>
    <Image width={50} height={50} src={"/images/rasam-logo.png"} quality={70} className='animate-pulse'/>
    </div>
  )
}

export default Loading
