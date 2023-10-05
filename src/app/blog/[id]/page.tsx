import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { getCategoryTitle } from '@/lib/utils';

import BlogFooter from '@/components/blog/footer';
import BlogItem from '@/components/blog/item';
import GradientText from '@/components/common/GradientText';
import Tag from '@/components/common/Tag';

import Background from '@/app/blog/back';
import { getBlogById } from '@/helper/endpoints/blog/apis';

import Blogs from '../data.json';

import ArrowLeft from '~/svg/ArrowLeft.svg';

const BlogPostPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const data = getBlogById({
    id,
  });

  const { category, title, description, image, content } = data;

  return (
    <>
      <Background />
      <main>
        <section className='relative mx-auto w-full max-w-[800px] px-5'>
          <Link href='/blog'>
            <div className='absolute hidden h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition-colors duration-200 hover:text-[#00D5FF] lg:-ml-24 lg:-mt-1 lg:flex'>
              <ArrowLeft className='h-3 w-3' />
            </div>
          </Link>
          <div className='mt-[43px] hidden cursor-default gap-[6px] text-[15px] leading-[20px] md:flex'>
            <Link href='/blog' className='text-[#FFFFFF80]'>
              Blog
            </Link>
            <span>/</span>
            <span>{data.title}</span>
          </div>

          <div className='mt-[40px] flex flex-col gap-4'>
            <Tag>{getCategoryTitle(category)}</Tag>
            <GradientText className='text-[32px] font-[600] leading-[36.8px] md:text-[44px] md:leading-[50.6px]'>
              {title}
            </GradientText>
            <p className='text-[16px] leading-[20.8px] md:text-[19px] md:leading-[24.7px]'>
              {description}
            </p>
            <BlogFooter data={data} className='mt-[4px]' />
          </div>

          <div className='mt-[38px] h-fit w-full overflow-hidden rounded-[7px] md:mt-8'>
            <Image
              src={image}
              alt=''
              className='w-full'
              width={550}
              height={385}
            />
          </div>

          <div
            className='mt-10 md:mt-8'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          <div className='my-10 h-[1px] w-full bg-[#FFFFFF33] md:my-20'></div>

          <div className='flex flex-col gap-11'>
            <GradientText className='text-[32px] font-[600] leading-[36.8px] md:text-[44px] md:leading-[50.6px]'>
              Related Articles
            </GradientText>
            <div className='grid grid-cols-1 justify-center gap-x-[30px] gap-y-[32px] md:grid-cols-2 lg:grid-cols-3'>
              {Blogs &&
                Blogs.slice(0, 3).map((blog, index) => (
                  <BlogItem data={blog} showDescription={false} key={index} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPostPage;
