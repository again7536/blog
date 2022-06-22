import { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import caxios from 'src/lib/axios';
import { Post } from 'types/post';

const usePosts = (page: number, initialPosts: Post[]) => {
  const { isLoading, error, data } = useQuery<
    unknown,
    unknown,
    { posts: Post[] }
  >(
    ['posts', page],
    async () => {
      const result = await caxios.get<Post[]>(
        `/posts?limit=5&offset=${(page - 1) * 5}`
      );
      if (result.status >= 400) throw Error('error');
      return result.data;
    },
    { initialData: initialPosts, staleTime: 0 }
  );

  return { isLoading, error, data };
};

export { usePosts };
