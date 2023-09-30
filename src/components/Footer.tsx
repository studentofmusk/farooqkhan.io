import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col justify-between items-center'>
        <img className='w-32' src="logo.png" alt="" />
        <div className='mb-16 font-bold text-sm'>Thanks for scrolling, <span className='font-normal text-slate-300'>That&apos;s all</span> </div>
        <div className='mb-10 flex space-x-10 cursor-pointer'>
                    
                    <a className='hover:scale-125 duration-150' target='_blank' href="https://github.com/studentofmusk"><img src="GitHub.png" alt=""  /></a>
                    <a className='hover:scale-125 duration-150' target='_blank' href="https://instagram.com/student_of_musk?igshid=OGQ5ZDc2ODk2ZA=="><img src="Instagram.png" alt=""  /></a>
                    <a className='hover:scale-125 duration-150' target='_blank' href="https://www.linkedin.com/in/farooq-khan-89a67a252"><img src="LinkedIn.png" alt=""  /></a>
        </div>
    </section>
  )
}

export default Footer