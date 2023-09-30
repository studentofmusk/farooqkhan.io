import React from 'react'

const Slide1 = () => {
  return (
    <section className='w-[80%] mx-auto my-10'>
        <div className='w-full flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0'>
            {/* Left */}
            <div className='md:w-[50%] mt-5'>
                <h1 className='text-5xl md:text-8xl mb-2'>Farooq <br /> Khan</h1>
                <div className='mb-10 md:mb-20 w-16 h-3 bg-3 rounded-full'></div>
                <div className=' flex space-x-5 cursor-pointer'>
                    
                    <a className='hover:-translate-y-1 duration-150' target='_blank' href="https://github.com/studentofmusk"><img src="GitHub.png" alt=""  /></a>
                    <a className='hover:-translate-y-1 duration-150' target='_blank' href="https://instagram.com/student_of_musk?igshid=OGQ5ZDc2ODk2ZA=="><img src="Instagram.png" alt=""  /></a>
                    <a className='hover:-translate-y-1 duration-150' target='_blank' href="https://www.linkedin.com/in/farooq-khan-89a67a252"><img src="LinkedIn.png" alt=""  /></a>
                </div>
            </div>
            {/* Right */}
            <div className='mt-5 md:w-[50%] flex justify-end'>
                

                <div className="md:w-4/6">
                <div className="c-4 mb-5">-Introduction</div>
                <div className='text-xl md:text-3xl mb-8'>UI/UX Designer and Backend Developer, based in MERN Stack.</div>
                <a target='_blank' href='https://drive.google.com/file/d/1qF2Gp7ZtXcVh2BVrU7qtuu_VPQGPbMkv/view?usp=sharing' className='flex items-center mt-10 cursor-pointer'>
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