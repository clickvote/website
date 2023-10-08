import * as React from 'react';

import { cn } from '@/lib/utils';

import { extraUrls } from '@/constant/config';
import {GlobalContext} from "@/helper/context/global.context";

import Github from '~/svg/Github.svg';

type Props = {
  className?: string;
};

export default function GithubBtn({ className }: Props) {
  const {stars} = React.useContext(GlobalContext);
  const [repoStars] = React.useState(stars);

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
