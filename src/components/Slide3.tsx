import React from 'react'
const {Cloud, ReactIcon, Nodejs, Unity, MySQL, MongoDB, Express, Tailwind}  = require('@/Icons/SVG');

const Slide3 = () => {
  return (
    <section className='mt-48 flex justify-center items-center'>
        <div className='h-52 w-9/12 flex items-center justify-center flex-shrink-0 flex-wrap '>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <Cloud/>
                <div>AWS Cloud Computing</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <Unity className="fill-white w-6 h-6" />
                <div>Unity Development</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <Express className="fill-white w-6 h-6" />
                <div>Express</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <Nodejs className="fill-white w-6 h-6" />
                <div>Node JS</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <MongoDB className="fill-white w-6 h-6" />
                <div>MongoDB</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <MySQL className="fill-white w-6 h-6" />
                <div>MySQL</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <ReactIcon className="fill-white w-6 h-6" />
                <div>React JS</div>
            </div>
            
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <ReactIcon className="fill-white w-6 h-6" />
                <div>Electron JS</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <ReactIcon className="fill-white w-6 h-6" />
                <div>React Native</div>
            </div>
            <div className='flex space-x-2 mx-4 items-center cursor-default'>
                <Tailwind className="fill-white w-6 h-6" />
                <div>Tailwind CSS</div>
            </div>
            
            
            

        </div>

    </section>
  )
}

export default Slide3