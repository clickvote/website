import Blogs from '@/app/blog/data.json';
import { BlogListRespBody } from '@/helper/endpoints/blog/schema';

import { IBlog } from '@/types/interfaces/IBlog';

// TODO: Integrate with backend
export const getBlogs = (
  query: { page?: number; size?: number; category?: string } | undefined
): BlogListRespBody => {
  const {
    page = 1,
    size = 9,
    category = '',
  } = query as { page?: number; size?: number; category?: string };

  const blogs = Blogs.filter((item) => item.category.includes(category));

  return {
    blogs: blogs.slice(size * (page - 1), size * page),
    page,
    size,
    total: blogs.length,
    category,
  };
};

export const getBlogById = ({ id }: { id: string }): IBlog => {
  return Blogs.find((item) => item.id === id)!;
};
