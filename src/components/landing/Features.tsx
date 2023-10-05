import * as React from 'react';

import Feature1 from '@/components/animation/Feature1';
import Feature2 from '@/components/animation/Feature2';
import Feature3 from '@/components/animation/Feature3';

type CardProps = {
  title: string;
  description: string;
  image: React.ReactNode;
};

const FeatureCard = ({ title, description, image }: CardProps) => {
  return (
    <div className='bg-gradient9 group flex h-[400px] max-w-[350px] flex-1 flex-col rounded-[14px] border-[1.11px] border-[#FFFFFF2B] pb-[12px] pt-[20px] transition duration-300 ease-in hover:border-[#CF90FF]'>
      {image}
      <div className='mt-[12px] flex flex-col gap-[12px] pl-[33px] pr-[38px] md:px-[10px] lg:pl-[33px] lg:pr-[38px]'>
        <p className='text-[21px] font-[600] leading-[27px] text-white'>
          {title}
        </p>
        <p className='text-[16.67px] font-[400] leading-[22px] text-[#A7A7A7]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <div className='mt-[90px] overflow-x-clip md:mt-[170px]'>
      <div className='bg-gradient3 bg-clip-text text-center text-[32px] font-[600] leading-[39px] text-transparent md:text-[44px] md:leading-[57px]'>
        Features
      </div>
      <div className='mx-[10px] mt-[32px] flex flex-col items-center justify-center gap-[24px] md:mt-[50px] md:flex-row md:gap-[30px]'>
        <FeatureCard
          title='Monitor and test what your members like'
          description='Look at the time-series of your likes. Understand where to put your efforts.'
          image={<Feature1 />}
        />
        <FeatureCard
          title='Handle unlimited amount of likes'
          description='Clickvote can handle and scale your system to match your traffic'
          image={<Feature2 />}
        />
        <FeatureCard
          title='Integrate our system to yours'
          description='Once we receive your likes, we send the Information to your System as you want it: API calls or listening to Kafka topics.'
          image={<Feature3 />}
        />
      </div>
    </div>
  );
}
