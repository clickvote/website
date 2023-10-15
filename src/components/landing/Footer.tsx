import Link from 'next/link';
import * as React from 'react';

import GithubBtn from '@/components/GithubBtn';
import Logo from '@/components/Logo';
import {
  GithubSvg,
} from '@/components/svgs';

import { extraUrls } from '@/constant/config';

import SuperFine from '~/svg/SuperFine.svg';

const FootLink = ({
  title,
  url = extraUrls.github,
  target = '_self',
}: {
  title: string;
  url?: string;
  target?: string;
}) => (
  <Link
    href={url || '/'}
    target={target}
    className='cursor-pointer transition duration-100 ease-in hover:text-[#00D5FF]'
  >
    {title}
  </Link>
);

const SocialIcon = ({
  children,
  url,
}: {
  children?: React.ReactNode;
  url?: string;
}) => (
  <a
    href={url}
    target='__blank'
    className='cursor-pointer fill-[#FFFFFF50] transition duration-100 ease-in hover:fill-[#FFF]'
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className='mx-auto mt-[110px] max-w-[1000px] overflow-hidden px-[20px] pb-[32px] md:mt-[189px] md:pb-[65px]'>
      <div className='flex justify-between'>
        <Logo responsive={false} />
        <GithubBtn className='hidden md:flex' />
      </div>
      <div className='mt-[46px] flex flex-col justify-between gap-[54px] md:flex-row md:gap-[0px]'>
        <div className='flex flex-1 flex-col gap-10 text-[14px] text-white md:flex-row md:gap-12'>
          <div className='flex w-full max-w-[174px] flex-col gap-2'>
            <FootLink title='Blog' url='/blog' />
            <FootLink title='Pricing' url='/pricing' />
            <FootLink
                title='Documentation'
                url={extraUrls.doc}
                target='_blank'
            />
          </div>
          {/*<div className='flex w-full max-w-[174px] flex-col gap-2'>*/}

          {/*</div>*/}
          <div className='flex w-full max-w-[174px] flex-col gap-2'>
            <FootLink title='Book a call' url="https://cal.com/nevodavid/30min" />
            <FootLink title='Terms of Use' url="/terms-of-use" />
            <FootLink title='Privacy Policy'  url="/privacy-policy" />
          </div>
        </div>
        <div className='flex flex-col gap-[54px]'>
          <GithubBtn className='w-fit cursor-pointer md:hidden' />

          <div className='flex gap-[25px]'>
            <SocialIcon url={extraUrls.github}>
              <GithubSvg width={24} height={24} />
            </SocialIcon>
            {/*<SocialIcon url={extraUrls.linkedin}>*/}
            {/*  <LinkedinSvg width={24} height={24} />*/}
            {/*</SocialIcon>*/}
            {/*<SocialIcon url={extraUrls.youtube}>*/}
            {/*  <YoutubeSvg width={24} height={24} />*/}
            {/*</SocialIcon>*/}
            {/*<SocialIcon url={extraUrls.discord}>*/}
            {/*  <DiscordSvg width={24} height={24} />*/}
            {/*</SocialIcon>*/}
            {/*<SocialIcon url={extraUrls.twitter}>*/}
            {/*  <SocialXSvg width={24} height={24} />*/}
            {/*</SocialIcon>*/}
          </div>
        </div>
      </div>

      <div className='mt-[55px] flex justify-between md:mt-[84px]'>
        <p className='text-[14px] leading-[19px] text-[#FFFFFFB2]'>
          Ⓒ 2023 <Link href="/" className="hover:underline">Clickvote</Link>
        </p>
        <div className='flex items-center justify-center'>
          <p className='text-[15px] leading-[20px] text-[#FFFFFF99]'>
            Designed by&nbsp;
          </p>
          <a href="https://superfine.studio" target="_blank">
            <SuperFine className='mt-[5px] h-[14px] w-[67px]' />
          </a>
        </div>
      </div>
    </div>
  );
}
