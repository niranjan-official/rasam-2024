import React from 'react'
import Heading from "../Heading";
import Cards from '../Cards';

const ProShow = () => {
  return (
    <section
      id="proshow"
      className="h-max md:min-h-screen w-full px-4 md:px-10 lg:px-24"
    >
      <Heading title={"Pro Show"} />
      <div className="text-red-500 flex flex-col md:flex-row justify-evenly items-center mt-2 md:mt-20 ">
        <Cards title={"Coming Soon.."}/>
        </div>
    </section>
  )
}

export default ProShow