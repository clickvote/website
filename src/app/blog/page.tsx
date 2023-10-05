'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { getCategoryTitle } from '@/lib/utils';

import BlogFooter from '@/components/blog/footer';
import BlogItem from '@/components/blog/item';
import Tag from '@/components/common/Tag';
import Pagination from '@/components/Pagination';

import LIST_CATEGORY from '@/constant/category';
import { getBlogById, getBlogs } from '@/helper/endpoints/blog/apis';

import Background from './back';

import { IBlog } from '@/types/interfaces/IBlog';

const Button = ({
  selected = false,
  children,
  onClick: handleClick,
}: {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    /* from-[#9400FF38] to-[#9400FF00] */
    <button
      className={`w-fit whitespace-nowrap rounded-[7px] border border-[#FFFFFF1A] bg-gradient-to-b from-[#FFFFFF0A] to-[#FFFFFF00] px-[16px] py-[10px] text-[14px] leading-[22.4px] text-[#FFFFFF99] transition-all hover:opacity-70 ${
        selected &&
        '!border-[#AF46FF] !from-[#9400FF38] !to-[#9400FF00] text-white'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default function BlogPage() {
  // TODO: Update to use await/async endpoints
  const {
    blogs,
    page: _page,
    size,
    total: _total,
  } = getBlogs({
    page: 1,
    size: 9,
  });

  const firstBlog = getBlogById({
    id: '33',
  });

  const router = useRouter();
  const [category, setCategory] = React.useState('');
  const [data, setData] = React.useState(blogs);
  const [page, setPage] = React.useState(_page);
  const [perPage, setPageSize] = React.useState(size);
  const [total, setTotal] = React.useState(_total);

  const handlePageChange = (v: number) => {
    fetchData({
      page: v,
      size,
      category,
    });
  };

  const handleCategoryChange = (v: string) => {
    fetchData({
      page: 1,
      size,
      category: v,
    });
  };

  const fetchData = (query: {
    page?: number;
    size?: number;
    category?: string;
  }) => {
    const { blogs, page, category, size, total } = getBlogs(query);

    setData(blogs);
    setPage(page);
    setCategory(category);
    setPageSize(size);
    setTotal(total);
  };

  return (
    <>
      <Background />
      <main>
        <section className='mx-auto mt-[40px] flex w-full flex-col px-[20px] md:mt-[100px] md:max-w-[1150px]'>
          <div
            className='flex cursor-pointer flex-col-reverse gap-[16px] md:flex-row md:justify-between md:gap-[50px] lg:gap-[100px]'
            onClick={() => router.push(`/blog/${firstBlog?.id}`)}
          >
            <div className='flex w-full flex-1 flex-col gap-[16px] md:max-w-[460px]'>
              <Tag className='hidden md:block'>
                {getCategoryTitle(firstBlog?.category)}
              </Tag>
              <Link
                href={`/blog/${firstBlog?.id}`}
                className='bg-gradient-to-b from-[#FFFFFF] to-[#AF47FF] bg-clip-text text-[32px] font-[600] leading-[36.8px] text-transparent md:text-[44px] md:leading-[50.6px]'
              >
                {firstBlog?.title}
              </Link>
              <p className='text-[16px] leading-[20.8px] md:text-[19px] md:leading-[24.7px]'>
                {firstBlog?.description}
              </p>
              <BlogFooter data={firstBlog!} className='mt-[4px]' />
            </div>
            <div className='flex flex-1 flex-col gap-[16px]'>
              <Tag className='md:hidden'>Announcement</Tag>
              <div className='h-fit overflow-hidden rounded-[7px]'>
                <Image
                  src={firstBlog?.image || ''}
                  alt=''
                  className='w-full'
                  width={550}
                  height={385}
                />
              </div>
            </div>
          </div>

          <div className='mt-[70px] flex w-full overflow-x-scroll md:mt-[100px] md:justify-center md:overflow-auto'>
            <div className='flex gap-[12px]'>
              {LIST_CATEGORY &&
                LIST_CATEGORY.map((item, index) => (
                  <Button
                    selected={item.value === category}
                    onClick={() => handleCategoryChange(item.value)}
                    key={index}
                  >
                    {item.title}
                  </Button>
                ))}
            </div>
          </div>
          <div className='mx-auto mt-[32px] grid grid-cols-1 justify-center gap-x-[30px] gap-y-[40px] md:mt-[74px] md:grid-cols-2 md:gap-y-[76px] lg:grid-cols-3'>
            {data &&
              data.map((blog: IBlog, index) => (
                <BlogItem data={blog} key={index} />
              ))}
          </div>
          <Pagination
            page={page}
            perPage={perPage}
            itemCount={total}
            onPageChange={handlePageChange}
            className='mt-[70px] border-t-[1px] border-[#FFFFFF33] pt-[20px] md:mt-[84px]'
          />
        </section>
      </main>
    </>
  );
}
