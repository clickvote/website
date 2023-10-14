import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NextSeo } from 'next-seo';
import * as React from 'react';
import {useMemo, useState} from "react";

import BlogFooter from '@/components/blog/footer';
import BlogItem from '@/components/blog/item';
import Tag from '@/components/common/Tag';
import BackgroundBlog from "@/components/layout/back_blog";
import RootLayout from "@/components/layout/layout";

import {getBlogs} from "@/helper/endpoints/blog/get.blogs";
import {getGithubStars} from "@/helper/endpoints/github/get.github.stars";

const blogsPerPage = 1;

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

export default function BlogPage(props: any) {
  const [currentCategory, setCurrentCategory] = useState('All Categories');
  const items = useMemo(() => {
    const filteredItems = props.items.filter((item: any) => {
        return currentCategory === 'All Categories' || item.tag === currentCategory;
    });
    return {
      top: filteredItems?.[0],
      items: filteredItems?.slice(1) || [],
    }
  }, [currentCategory, props.items]);


  const router = useRouter();

  const handlePageChange = (v: number) => {
    return ;
  };

  const handleCategoryChange = (v: string) => {
    setCurrentCategory(v);
  };


  return (
    <RootLayout stars={props.stars}>
      <NextSeo
          title="Clickvote - Blog"
          description="Learn more about click vote and how it works"
      />
      <BackgroundBlog />
      <main>
        <section className='mx-auto mt-[40px] flex w-full flex-col px-[20px] md:mt-[100px] md:max-w-[1150px]'>
          <div
            className='flex cursor-pointer flex-col-reverse gap-[16px] md:flex-row md:justify-between md:gap-[50px] lg:gap-[100px]'
            onClick={() => router.push(`/blog/${items.top.slug}`)}
          >
            <div className='flex w-full flex-1 flex-col gap-[16px] md:max-w-[460px]'>
              <Tag className='hidden md:block'>
                {items.top.tag}
              </Tag>
              <Link
                href={`/blog/${items.top.slug}`}
                className='bg-gradient-to-b from-[#FFFFFF] to-[#AF47FF] bg-clip-text text-[32px] font-[600] leading-[36.8px] text-transparent md:text-[44px] md:leading-[50.6px]'
              >
                {items.top.title}
              </Link>
              <p className='text-[16px] leading-[20.8px] md:text-[19px] md:leading-[24.7px]'>
                {items.top.description}
              </p>
              <BlogFooter data={items.top} className='mt-[4px]' />
            </div>
            <div className='flex flex-1 flex-col gap-[16px]'>
              <Tag className='md:hidden'>{items.top.tag}</Tag>
              <div className='h-fit overflow-hidden rounded-[7px]'>
                <img
                  src={items.top.cover}
                  alt=''
                  className='h-[210px] w-full object-cover md:h-[385px] md:w-[550px]'
                  width={550}
                  height={385}
                />
              </div>
            </div>
          </div>

          <div className='scrollbar mt-[70px] flex w-full overflow-x-scroll md:mt-[100px] md:justify-center md:overflow-auto'>
            <div className='flex gap-[12px]'>
              {['All Categories', ...props?.categories!].map((item: any, index: any) => (
                  <Button
                    selected={item === currentCategory}
                    onClick={() => handleCategoryChange(item)}
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
            </div>
          </div>
          <div className='mx-auto mt-[32px] grid w-full grid-cols-1 justify-center gap-x-[30px] gap-y-[40px] md:mt-[74px] md:w-auto md:grid-cols-2 md:gap-y-[76px] lg:grid-cols-3'>
            {items?.items?.map((blog: any, index: any) => (
                <BlogItem data={blog} key={index} />
            ))}
          </div>
          {/*<Pagination*/}
          {/*  page={1}*/}
          {/*  perPage={10}*/}
          {/*  itemCount={123}*/}
          {/*  onPageChange={handlePageChange}*/}
          {/*  className='mt-[70px] border-t-[1px] border-[#FFFFFF33] pt-[20px] md:mt-[84px]'*/}
          {/*/>*/}
        </section>
      </main>
    </RootLayout>
  );
}

export const getStaticProps = async () => {
  const blogs = await getBlogs();
  const stars = await getGithubStars();

  return {
    props: {
      ...blogs,
      stars
    },
    revalidate: 3600
  };
}
