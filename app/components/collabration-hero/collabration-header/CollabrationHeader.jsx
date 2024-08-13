import React from 'react'
import Image from 'next/image';
import  ParnterWithUs  from '../../../../public/assets/images/collabration_page/collabration-img.svg'

const CollabrationHeader = () => {
  return (
    <div className='flex flex-col justify-center items-center relative xl:mt-[80px] lg:mt-[35px] sm:mt-[60px] mt-[34px]'>
        <h1 className='page-heading text-[#2A2A2A] xl:text-[110px] lg:text-[94px] sm:text-[74px] text-[40px]'>Partner WIth Us</h1>
        <Image src={ ParnterWithUs } className='absolute top-[72%] xl:h-[84.57px] xl:w-[352.37px] lg:w-[330px] lg:h-[70px] sm:h-[60px] sm:w-[300px] h-[34.5px] w-[143.75px]' alt="partner with us" />
    </div>
  )
}

export default CollabrationHeader;