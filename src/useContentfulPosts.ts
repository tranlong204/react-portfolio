import { useEffect, useState } from 'react';
import client from './api/contentfulClient';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  slug: string;
}

export const useContentfulPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.getEntries({ content_type: 'blogPost' }).then((response) => {
      const fetched = response.items.map((item: any) => ({
        id: item.sys.id,
        title: item.fields.title,
        date: item.fields.date,
        summary: item.fields.summary,
        content: item.fields.content,
        slug: item.fields.slug,
      }));
      setPosts(fetched);
      setLoading(false);
    });
  }, []);

  return { posts, loading };
};
