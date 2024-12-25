import React from 'react'
import { assets } from './../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className=' flex flex-col justify-center item-start gap-6' >
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>D-32, Mayur Vihar Phase 1 <br/>
              New Delhi, Delhi - 110091</p>
          <p className='text-gray-500'>tel :+91 9058483683 <br/>Email: jaykantmishra88@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm' >Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
