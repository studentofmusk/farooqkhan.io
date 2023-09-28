import React from 'react'

const Slide1 = () => {
  return (
    <section className='w-[80%] mx-auto my-10'>
        <div className='w-full flex justify-between items-start'>
            {/* Left */}
            <div className='w-[50%] mt-5'>
                <h1 className='text-8xl mb-2'>Farooq <br /> Khan</h1>
                <div className='mb-20 w-16 h-3 bg-3 rounded-full'></div>
                <div className=' flex space-x-5 cursor-pointer'>
                    
                    <a className='hover:-translate-y-1 duration-150' target='_blank' href="https://github.com/studentofmusk"><img src="GitHub.png" alt=""  /></a>
                    <a className='hover:-translate-y-1 duration-150' target='_blank' href="https://instagram.com/student_of_musk?igshid=OGQ5ZDc2ODk2ZA=="><img src="Instagram.png" alt=""  /></a>
                    <a className='hover:-translate-y-1 duration-150' target='_blank' href="https://www.linkedin.com/in/farooq-khan-89a67a252"><img src="LinkedIn.png" alt=""  /></a>
                </div>
            </div>
            {/* Right */}
            <div className='mt-5 w-[50%] flex justify-end'>
                

                <div className="w-4/6">
                <div className="c-4 mb-5">-Introduction</div>
                <div className='text-3xl mb-8'>Product Designer and Developer, based in India.</div>
                <div className='c-4 text-xs'>Dive into my portfolio where code meets creativity. Each project showcases my journey through the vast landscape of full-stack development, crafting seamless experiences from database to user interface.</div>
                <a href='/resume' className='flex items-center mt-10 cursor-pointer'>
                    <img className='inline mr-4' src="doc.png" alt="" />
                    <div className='inline c-3 underline'>Resume</div>

                </a>
                </div>

               
            </div>
        </div>
    </section>
  )
}

export default Slide1