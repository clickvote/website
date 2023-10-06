import Link from 'next/link';
import * as React from 'react';

import GithubBtn from '@/components/GithubBtn';
import Logo from '@/components/Logo';
import {
  DiscordSvg,
  GithubSvg,
  LinkedinSvg,
  SocialXSvg,
  YoutubeSvg,
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
            <FootLink title='Contributors' />
            <FootLink title='Pricing' url='/pricing' />
            <FootLink title='Careers' />
            <FootLink title='2022 Events' />
            <FootLink title='OSS Friends' />
          </div>
          <div className='flex w-full max-w-[174px] flex-col gap-2'>
            <FootLink
              title='Documentation'
              url={extraUrls.doc}
              target='_blank'
            />
            <FootLink title='Roadmap' />
            <FootLink title='Providers' />
            <FootLink title='Handbook' />
            <FootLink title='Contact Us' />
            <FootLink title='Press Kit' />
            <FootLink title='Polishing Season' />
            <FootLink title='Notification Directory' />
            <FootLink title='OSS' />
          </div>
          <div className='flex w-full max-w-[174px] flex-col gap-2'>
            <FootLink title='Terms of Use' />
            <FootLink title='Privacy Policy' />
            <FootLink title='DPA' />
            <FootLink title='Status Page' />
          </div>
        </div>
        <div className='flex flex-col gap-[54px]'>
          <GithubBtn className='w-fit cursor-pointer md:hidden' />

          <div className='flex gap-[25px]'>
            <SocialIcon url={extraUrls.github}>
              <GithubSvg width={24} height={24} />
            </SocialIcon>
            <SocialIcon url={extraUrls.linkedin}>
              <LinkedinSvg width={24} height={24} />
            </SocialIcon>
            <SocialIcon url={extraUrls.youtube}>
              <YoutubeSvg width={24} height={24} />
            </SocialIcon>
            <SocialIcon url={extraUrls.discord}>
              <DiscordSvg width={24} height={24} />
            </SocialIcon>
            <SocialIcon url={extraUrls.twitter}>
              <SocialXSvg width={24} height={24} />
            </SocialIcon>
          </div>
        </div>
      </div>

      <div className='mt-[55px] flex justify-between md:mt-[84px]'>
        <p className='text-[14px] leading-[19px] text-[#FFFFFFB2]'>
          Ⓒ 2023 Clickvote
        </p>
        <div className='flex items-center justify-center'>
          <p className='text-[15px] leading-[20px] text-[#FFFFFF99]'>
            Designed by&nbsp;
          </p>
          <SuperFine className='mt-[5px] h-[14px] w-[67px]' />
        </div>
      </div>
    </div>
  );
}
