import { IBlog } from '@/types/interfaces/IBlog';

export interface BlogListRespBody {
  blogs: IBlog[];
  page: number;
  size: number;
  total: number;
  category: string;
}
