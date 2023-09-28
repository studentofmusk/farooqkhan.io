import React from 'react'

const Slide2 = () => {
  return (
    <div className='w-full bg-1 py-10'>
        <section className='w-[80%] mx-auto mt-10'>
            <div className='w-full flex justify-between items-start'>
                {/* Left */}
                
                <div className='mt-5 w-full flex '>
                    

                    <div className="w-4/6 ml-20">
                    <div className="c-4 mb-5">- Contact</div>
                    <div className='text-3xl mb-8'>Any Type of Query & Discussion.</div>
                    <div className='c-4 text-xs'>Discover the magic of collaboration. Let&apos;s create something special together.</div>
                    <a href='mailto:farooqvrofficial@gmail.com' className='flex items-center mt-10 cursor-pointer'>
                        <div className='mr-3 inline c-3 underline peer'>farooqvrofficial@gmail.com</div>
                        <img className='inline mr-4' src="arrow.png" alt="" />
                        <img src='Mail.png' className=" w-6 mr-4 opacity-0 peer-hover:opacity-100 peer-hover:translate-x-2 transform duration-300  " alt=""  />
                    </a>
                    </div>

                
                </div>
                {/* Right */}
                <div className='mt-5 w-full flex justify-end'>
                    

                    <div className="w-4/6">
                    <div className='text-2xl my-4'>You can&apos;t use up creativity, the more you use, more you have in the signifant mind</div>
                    <div className='c-4 text-xs'>Creativity isn&apos;t a finite resource; it grows and flourishes the more you tap into it. In the realm of a curious mind, every endeavor sparks even greater imagination and potential</div>
                    <a href='/resume' className='flex space-x-10 items-center mt-10 cursor-pointer'>
                        <div className=" flex items-center">
                            <div className='text-5xl mr-4 c-3'>1</div>
                            <div className=' text-left'>Year of <br />Experience</div>
                        </div>
                        <div className=" flex items-center">
                            <div className='text-5xl mr-4 c-3'>3</div>
                            <div className=' text-left'>Satisfied <br />Clients</div>
                        </div>

                    </a>
                    </div>

                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Slide2