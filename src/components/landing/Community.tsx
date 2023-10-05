import * as React from 'react';

import NextImage from '@/components/NextImage';

import Github from '~/svg/Community-github.svg';
import Linkedin from '~/svg/Community-linkedin.svg';
import Reddit from '~/svg/Community-reddit.svg';
import SocialX from '~/svg/Community-x.svg';
import Hashtag from '~/svg/Hashtag1.svg';
import LogoSvg from '~/svg/Logo.svg';

type CardProps = {
  mainImage: string;
  subImage: React.ReactNode;
};

const CommunityCard = ({ mainImage, subImage }: CardProps) => {
  return (
    <div className='relative flex h-[57px] w-[57px] items-end justify-end md:h-[89px] md:w-[89px]'>
      <NextImage
        className='absolute -z-10 h-[57px] w-[57px] md:h-[89px] md:w-[89px]'
        src={mainImage}
        alt='Commnity Member'
        width={89}
        height={89}
      />
      {subImage}
    </div>
  );
};

export default function Community() {
  return (
    <div className='mt-[90px] flex flex-col items-center md:mt-[170px]'>
      <div className='bg-gradient3 bg-clip-text text-[32px] font-[600] leading-[39px] text-transparent md:text-[44px] md:leading-[57.2px]'>
        Bulit by the
        <br className='md:hidden' /> community
      </div>
      <p className='mx-[13px] mt-[24px] max-w-[872px] text-center text-[17px] font-[400] leading-[23px] text-[#A7A7A7] md:text-[19px] md:leading-[31.35px]'>
        Open-source is in the heart of Novu. We keep all the source code and
        work publicly available. Join our community driven project with over
        3,000+ developers from around the world who contribute code and help
        building the modern notification infrastructure.
      </p>
      <div className='mt-[14px] w-full overflow-hidden md:mt-5'>
        <div className='relative left-[50%] -z-50 h-[420px] w-[640px] -translate-x-[50%] md:h-[656px] md:w-[1000px]'>
          <Hashtag className='absolute top-0 -z-50 h-[420px] w-[640px] md:h-[656px] md:w-[1000px]' />
          <div className='flex flex-col'>
            <div className='mt-[63px] flex items-center justify-center gap-[102px] md:mt-[100px] md:gap-[160px]'>
              <CommunityCard
                mainImage='/images/community/1.webp'
                subImage={
                  <Github
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
              <CommunityCard
                mainImage='/images/community/2.webp'
                subImage={
                  <SocialX
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
            </div>
            <div className='mt-[-3px] flex items-center justify-center gap-[335px] md:mt-[-5px] md:gap-[524px]'>
              <CommunityCard
                mainImage='/images/community/3.webp'
                subImage={
                  <Linkedin
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
              <CommunityCard
                mainImage='/images/community/4.webp'
                subImage={
                  <Reddit
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
            </div>
            <div className='mt-[8px] flex items-center justify-center gap-[56px] md:mt-[13px] md:gap-[88px]'>
              <CommunityCard
                mainImage='/images/community/5.webp'
                subImage={
                  <SocialX
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
              <LogoSvg className='h-[47px] w-[47px] md:h-[74px] md:w-[74px]' />
              <CommunityCard
                mainImage='/images/community/6.webp'
                subImage={
                  <Github
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
            </div>
            <div className='mt-[8px] flex items-center justify-center gap-[335px] md:mt-[13px] md:gap-[524px]'>
              <CommunityCard
                mainImage='/images/community/7.webp'
                subImage={
                  <Github
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
              <CommunityCard
                mainImage='/images/community/8.webp'
                subImage={
                  <Github
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
            </div>
            <div className='mt-[-3px] flex items-center justify-center gap-[102px] md:mt-[-5px] md:gap-[160px]'>
              <CommunityCard
                mainImage='/images/community/9.webp'
                subImage={
                  <Reddit
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
              <CommunityCard
                mainImage='/images/community/10.webp'
                subImage={
                  <Linkedin
                    className='h-[14px] w-[14px] md:h-[22px] md:w-[22px]'
                    loading='lzay'
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
