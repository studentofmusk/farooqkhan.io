import React from 'react'

const Navbar = () => {
  return (
    <section className="w-[85%] mx-auto">
      <div className="mt-16 w-full flex justify-between items-center">
        <img src="logo.png" className="w-32" alt="logo"  />
        
        <ul  className="mr-10 flex text-3xl font-bold space-x-7 ">
          <li className="flex flex-col items-center">
            <div className="mb-3 hover:text-white transform duration-150 cursor-pointer ">Services</div>
            <div className="w-2 h-2 rounded-full bg-3"></div>
          </li>
          <li className="flex flex-col items-center option2">
            <div className="mb-3 c-2 peer-hover:text-white hover:text-white transform duration-150 cursor-pointer ">Works</div>
            <div className="w-2 h-2 bg-1 rounded-full "></div>
          </li>
          <li className="flex flex-col items-center">
            <div className="mb-3 c-2 hover:text-white transform duration-150 cursor-pointer ">Blog</div>
            <div className="w-2 h-2 bg-1 rounded-full "></div>
          </li>
        </ul>
        
      </div>
    </section>
  )
}

export default Navbar