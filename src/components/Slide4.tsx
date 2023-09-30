import React from 'react'

const Slide4 = () => {
  return (
    <section className='flex py-20 items-start justify-center bg-1'>
        <div className='mt-5 md:mt-0 shrink-0 w-32 h-40 md:w-72 md:h-96 mr-8 md:mr-20' id='profile'></div>
        <div className='shrink-0 w-3/6 md:w-3/6 text-left' >
        <span><svg className=' mb-5 w-7 md:w-14 fill-[#434657]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m4.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg></span>
        <span className='text-sm md:text-3xl'>Challenges are what make life interesting&#59; overcoming them is what makes life meaningful.</span>
        <div className='mt-10 text-sm md:text-2xl c-3'>Joshua J. Marine</div>
        <div className="mt-5 flex space-x-3">
          <div className='w-2 md:w-3 h-2 md:h-3 rounded-full bg-3 animate-bounce'></div>
          <div className='w-2 md:w-3 h-2 md:h-3 rounded-full bg-2 animate-bounce '></div>
          <div className='w-2 md:w-3 h-2 md:h-3 rounded-full bg-3 animate-bounce '></div>
          <div className='w-2 md:w-3 h-2 md:h-3 rounded-full bg-2 animate-bounce '></div>
          
        </div>
        </div>

    </section>
  )
}

export default Slide4