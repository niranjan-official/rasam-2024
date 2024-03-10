import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <section id='home' className='h-screen w-full flex justify-center bg-teal-500 home-bg p-16 px-28'>
      <div className='w-full h-full rounded-xl shadow-md'>
        <Image src={'/images/home-bg.jpg'} fill/>
      </div>
    </section>
  )
}

export default Home
