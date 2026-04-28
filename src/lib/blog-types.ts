export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
  keywords: string[];
  createdAt: string;
  updatedAt: string;
};

export type CreateBlogInput = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  image: string;
  content: string;
  keywords: string[];
  slug?: string;
};
