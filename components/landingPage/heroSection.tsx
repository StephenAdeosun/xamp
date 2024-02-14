import React from 'react'
import Image from 'next/image'
import Banner from "@/public/bannerimg 1.png"

function heroSection() {
  return (
    <div className='text-center   md:min-h-[928px]'>
    <div className='text-center bg-[#F2EFE8] pt-[129px]  '>
        <h1 className='font-[600] bg-[#F2EFE8] text-[30px] md:text-[68px] max-w-[816px] m-auto'>Real Estate should not be a stress. </h1>
        <p className='font-[400] bg-[#F2EFE8] text-[16px] md:text-[20px] mt-[24px] max-w-[816px] m-auto text-[#27292C]'>Discover your next home, manage your tenants, rent, lease and sell your properties, all from the comfort of your couch.</p>
    </div>
        <div className='w-full bg-[#F2EFE8] m-auto pt-[51px]'>
            <Image src={Banner} width={1440} height={418} alt=''/>
        </div>
    </div>
  )
}

export default heroSection