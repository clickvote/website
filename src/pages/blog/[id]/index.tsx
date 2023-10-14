import Link from 'next/link';
import {NextSeo} from "next-seo";
import * as React from 'react';

import BlogFooter from '@/components/blog/footer';
import BlogItem from '@/components/blog/item';
import GradientText from '@/components/common/GradientText';
import Tag from '@/components/common/Tag';
import BackgroundBlog from "@/components/layout/back_blog";
import RootLayout from "@/components/layout/layout";

import {getBlogs} from "@/helper/endpoints/blog/get.blogs";
import {getGithubStars} from "@/helper/endpoints/github/get.github.stars";

import ArrowLeft from '~/svg/ArrowLeft.svg';

const BlogPostPage = (data: any) => {
  if (!data.blog) {
    return <></>;
  }
  const { title, description, cover, content, tag, slug } = data.blog;

  return (
    <RootLayout stars={data.stars}>
      <NextSeo
          title={`Clickvote - ${title}`}
          description={description}
          canonical={process.env.NEXT_PUBLIC_SUBSTACK_NEWSLETTER_URL + '/p/' + slug}
          openGraph={{
            images: [
                {
                    url: cover,
                    alt: title,
                }
            ]
          }}
      />
      <BackgroundBlog />
      <main>
        <section className='relative md:mx-auto w-full max-w-[800px] mx-5'>
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
            <span>{title}</span>
          </div>

          <div className='mt-[40px] flex flex-col gap-4'>
            <Tag>{tag}</Tag>
            <GradientText className='text-[32px] font-[600] leading-[36.8px] md:text-[44px] md:leading-[50.6px]'>
              {title}
            </GradientText>
            <p className='text-[16px] leading-[20.8px] md:text-[19px] md:leading-[24.7px]'>
              {description}
            </p>
            <BlogFooter data={data.blog} className='mt-[4px]' />
          </div>

          <div className='mt-[38px] h-fit w-full overflow-hidden rounded-[7px] md:mt-8'>
            <img
              src={cover}
              alt=''
              className='h-[210px] w-full object-cover md:h-[475px]'
              width={550}
              height={385}
            />
          </div>

          <div
            className='mt-10 md:mt-8 blog-post'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          <div className='my-10 h-[1px] w-full bg-[#FFFFFF33] md:my-20'></div>

          {!!data.related.length && (<div className='flex flex-col gap-11'>
            <GradientText className='text-[32px] font-[600] leading-[36.8px] md:text-[44px] md:leading-[50.6px]'>
              Related Articles
            </GradientText>
            <div className='grid grid-cols-1 justify-center gap-x-[30px] gap-y-[32px] md:grid-cols-2 lg:grid-cols-3'>
              {data.related.map((b: any, index: any) => (
                  <BlogItem data={b} showDescription={false} key={index} height={164} />
                ))}
            </div>
          </div>)}
        </section>
      </main>
    </RootLayout>
  );
};

export const getStaticPaths = async () => {
  const blogs = await getBlogs();

  return {
    paths: blogs.items.map((blog: any) => ({
      params: {
        id: blog.slug,
      }
    })),
    fallback: true
  }
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getStaticProps = async ({params: {id}}) => {
  const blogs = await getBlogs(true);
  const stars = await getGithubStars();
  const blog = blogs.items.find((blog: any) => blog.slug === id);
  const related = blogs.items.filter((b: any) => b.tag === blog?.tag && b.slug !== blog?.slug).slice(0, 3);

  return {
    props: {
      blog,
      related,
      stars
    },
    revalidate: 3600
  };
}

export default BlogPostPage;
