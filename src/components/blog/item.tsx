import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { getCategoryTitle } from '@/lib/utils';

import BlogFooter from '@/components/blog/footer';
import Tag from '@/components/common/Tag';

import { IBlog } from '@/types/interfaces/IBlog';

type BlogItemProps = any;

const BlogItem = ({
  data,
  showDescription = true,
  height = 194,
}: BlogItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${data.slug}`);
  };

  return (
    <div
      className='flex cursor-pointer flex-col gap-[20px] transition-all md:max-w-[350px]'
      onClick={handleClick}
    >
      <Tag>{data.tag}</Tag>
      <Image
        src={data.cover}
        alt=''
        className='w-full rounded-[10px] bg-cover object-cover md:w-[350px]'
        width={350}
        height={194}
        style={{
          height: `${height}px`,
        }}
      />
      <div className='flex flex-col gap-[16px]'>
        <Link
          href={`/blog/${data.slug}`}
          className='text-[22px] font-[600] leading-[28.6px] transition-colors hover:text-[#00D5FF]'
        >
          {data.title}
        </Link>

        {showDescription && (
          <>
            <p className='mb-[4px] line-clamp-3 text-[16px] leading-[21.6px]'>
              {data.description}
            </p>
            <BlogFooter data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
