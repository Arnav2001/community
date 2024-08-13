'use client'
import Image from 'next/image'
import React from 'react'

const PaymentFailureMain = () => {
  return (
    <div className='h-full xl:mt-[110px] lg:mt-[60px] sm:mt-[50px] mt-[80px] mb-[50px] sm:mb-0 w-full flex flex-col justify-center items-center'>
        <Image
        src={"/assets/images/payment/failure-img.svg"}
        alt='image'
        width={130}
        height={124.06}
        className='flex flex-col justify-center items-center xl:h-[130px] xl:w-[124px] lg:h-[110px] lg:w-[110px] sm:h-[80px] sm:w-[80px] h-[52px] w-[52px] '/>
        <h1 className='page-subhead text-[#E41E4F] font-[800] xl:text-[40px] lg:text-[32px] sm:text-[26px] text-[20px] lg:mt-14 sm:mt-[30px] mt-[25px] xl:leading-[40px] lg:leading-[38px]'>Oops! Something went wrong.</h1>
        <h1 className={'content-neue-medium xl:mt-[10px] lg:mt-[8px] sm:mt-[5px] mt-[5px]  xl:text-[28px] lg:text-[20px] text-[#2A2A2A] sm:text-[18px] text-[14px] text-center'}>{`Let’s give it another shot!`}</h1>
        <div className='bg-[#2A2A2A] cursor-pointer sm:hover:bg-transparent sm:hover:border sm:hover:border-[#2A2A2A] sm:hover:text-[#2A2A2A] xl:text-[24px] lg:text-[18px] sm:text-[16px] text-[12px] flex justify-center items-center sm:mt-[50px] mt-[30px] sm:mb-[80px] mb-[50px] rounded-[30px] text-[#FFFDEE] xl:w-[265px] xl:h-[67px] lg:h-[50px] lg:w-[200px] sm:h-[40px] sm:w-[170px] h-[30px] w-[114px]'>
        Proceed to Pay
        </div>
    </div>
  )
}

export default PaymentFailureMain;