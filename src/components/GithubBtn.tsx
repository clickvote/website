'use client';

import * as React from 'react';

import { cn, formatStarCount } from '@/lib/utils';

import { extraUrls } from '@/constant/config';

import Github from '~/svg/Github.svg';

type Props = {
  className?: string;
};

export default function GithubBtn({ className }: Props) {
  const [repoStars, setRepoStars] = React.useState(formatStarCount(1024));

  React.useEffect(() => {
    fetch(extraUrls.apiGithub).then(async (response) => {
      const data = await response.json();

      if (data && data.stargazers_count) {
        setRepoStars(formatStarCount(data.stargazers_count));
      }
    });
  }, []);

  return (
    <a
      className={cn(
        'group flex cursor-pointer items-center gap-[10px] rounded-[7px] border-[1px] border-transparent bg-[#FFFFFF1A] px-[12px] py-[8px] text-[15px] text-white transition-all hover:border-[#FFFFFF1A] hover:bg-transparent md:ml-[5px] lg:ml-[20px]',
        className
      )}
      href={extraUrls.github}
      target='_blank'
    >
      <Github className='h-[19px] w-[19px]' loading='lazy' />
      <span>Star us</span>
      <div className='h-[16px] w-[2px] bg-[#FFFFFF4D]'></div>
      <span>{repoStars}</span>
    </a>
  );
}
