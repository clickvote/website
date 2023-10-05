import Image from 'next/image';
import * as React from 'react';

import { IBlog } from '@/types/interfaces/IBlog';

type BlogItemProps = {
  data: IBlog;
  className?: string;
};

const BlogFooter = ({ data, className }: BlogItemProps) => {
  const { avatar, author, date } = data;

  return (
    <div className={`flex items-center gap-[12px] ${className}`}>
      <Image
        src={avatar || '/images/avatar.webp'}
        alt=''
        className='rounded-full'
        width={24}
        height={24}
      />
      <p className='ml-1 text-[16px]'>{author}</p>
      <div className='h-[3px] w-[3px] rounded-full bg-[#D9D9D9]' />
      <p className='text-[16px] text-[#A7A7A7]'>{date}</p>
    </div>
  );
};

export default BlogFooter;
