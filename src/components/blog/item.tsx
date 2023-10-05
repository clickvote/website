'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { getCategoryTitle } from '@/lib/utils';

import BlogFooter from '@/components/blog/footer';
import Tag from '@/components/common/Tag';

import { IBlog } from '@/types/interfaces/IBlog';

type BlogItemProps = {
  data: IBlog;
  showDescription?: boolean;
};

const BlogItem = ({ data, showDescription = true }: BlogItemProps) => {
  const router = useRouter();
  const { id, category, description, title, image } = data;

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className='flex cursor-pointer flex-col gap-[20px] transition-all md:max-w-[350px]'
      onClick={handleClick}
    >
      <Tag>{getCategoryTitle(category)}</Tag>
      <Image
        src={image || '/images/blog/1.webp'}
        alt=''
        className='w-full rounded-[10px] md:w-[350px]'
        width={350}
        height={194}
      />
      <div className='flex flex-col gap-[16px]'>
        <Link
          href={`/blog/${id}`}
          className='text-[22px] font-[600] leading-[28.6px] transition-colors hover:text-[#00D5FF]'
        >
          {title}
        </Link>

        {showDescription && (
          <>
            <p className='mb-[4px] line-clamp-3 text-[16px] leading-[21.6px]'>
              {description}
            </p>
            <BlogFooter data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
