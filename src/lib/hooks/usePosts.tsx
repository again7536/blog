import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import caxios from 'src/lib/axios';
import { Post } from 'types/post';

const usePosts = (page: number, initialPosts: Post[]) => {
  const [offset, setOffset] = useState<number>(0);
  const { isLoading, error, data } = useQuery<
    unknown,
    unknown,
    { posts: Post[] }
  >(
    'posts',
    async () => {
      const result = await caxios.get<Post[]>(
        `/posts?limit=5&offset=${offset}`
      );
      if (result.status >= 400) throw Error('error');
      return result.data;
    },
    { initialData: initialPosts }
  );

  useEffect(() => {
    if (!isLoading && !error && data && data.posts.length > 0)
      setOffset(data.posts[data.posts.length - 1].id);
  }, [isLoading, error, data]);

  return { isLoading, error, data };
};

export { usePosts };
