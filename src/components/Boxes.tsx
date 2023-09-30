import React from 'react'
const {PC, Layer, Cube } = require('@/Icons/SVG')

const Boxes = () => {
  return (
    <section className='cursor-default relative flex justify-center top-0 left-0 w-full h-3'>
        <div className='absolute flex w-full scrollbar-hide overflow-y-scroll md:justify-center space-x-8 -top-32' >

            <div className="ml-8 md:ml-0 shrink-0 flex peer-mt-3 justify-evenly items-end w-72 h-64 bg-5 duration-200 hover:bg-[#fdc25a]">
                <div className=" h-[55%] w-full flex justify-center items-start">
                <div className='mr-6 mt-4 duration-200 hover-mt-3 '><Layer className="w-8 h-8" /></div>
                <div className=''>
                    <div className='text-2xl mb-3 font-semibold '>Web & App <br />Designer.</div>
                    <p className='text-xs'>5 Projects</p>
                </div>
                </div>
            </div>
            
            <div className="shrink-0 flex peer-mt-3 justify-evenly items-end w-72 h-64 bg-5 duration-200 hover:bg-[#fdc25a]">
                <div className=" h-[55%] w-full flex justify-center items-start">
                <div className='mr-6 mt-4 duration-200 hover-mt-3 '><Cube className="w-8 h-8" /></div>
                <div className=''>
                    <div className='text-2xl mb-3 font-semibold '>AR & VR  <br />Developer.</div>
                    <p className='text-xs'>2 Projects</p>
                </div>
                </div>
            </div>
            
            <div className="shrink-0 flex peer-mt-3 justify-evenly items-end w-72 h-64 bg-5 duration-200 hover:bg-[#fdc25a]">
                <div className=" h-[55%] w-full flex justify-center items-start">
                <div className='mr-6 mt-4 duration-200 hover-mt-3 '><PC className="w-8 h-8" /></div>
                <div className=''>
                    <div className='text-2xl mb-3 font-semibold '>Full Stack <br />Developer.</div>
                    <p className='text-xs'>3 Projects</p>
                </div>
                </div>
            </div>
            <div className='block md:block'></div>
            </div>

    </section>
  )
}

export default Boxes