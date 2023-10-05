import * as React from 'react';

export default function Service() {
  return (
    <div className='mt-[90px] md:mt-[81px]'>
      <p className='bg-gradient3 bg-clip-text text-center text-[32px] font-[600] leading-[39px] text-transparent md:text-[44px] md:leading-[57.2px]'>
        Embed Your <br className='md:hidden' /> Components Now
      </p>
      <div className='mx-[25px] mt-[32px] flex flex-col justify-center gap-[24px] md:mx-[10px] md:mt-[60px] md:flex-row md:gap-[33px]'>
        <div className='bg-gradient13 rounded-[12px] px-[68px] py-[71px] text-center '>
          <p className='text-[24px] font-[600] leading-[31px] text-white'>
            Self-Hosted
          </p>
          <p className='mt-[7px] text-[19px] font-[400] leading-[25px] text-[#A7A7A7]'>
            Run locally with docker-compose
          </p>
          <button className='bg-gradient10 mt-[34px] rounded-[7px] border-[1px] border-[#FFFFFF66] px-[20px] py-[16px] text-[18px] leading-[28px] text-white transition-all duration-100 ease-in hover:opacity-80 md:px-[51px]'>
            Read Docs
          </button>
        </div>
        <div className='bg-gradient12 rounded-[12px] border-[1px] border-[#9914FF66] px-[68px] py-[71px] text-center'>
          <p className='text-[24px] font-[600] leading-[31px] text-white'>
            Cloud
          </p>
          <p className='mt-[7px] text-[19px] font-[400] leading-[25px] text-white'>
            Use our free managed service
          </p>
          <button className='bg-gradient11 mt-[34px] rounded-[7px] border-[1px] border-[#FFFFFF66] px-[20px] py-[16px] text-[18px] leading-[28px] text-white transition-all duration-100 ease-in hover:opacity-80 md:px-[51px]'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
