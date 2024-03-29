import { useQuery } from 'react-query';
import caxios from 'src/lib/axios';

const useEndPage = () => {
  const { isLoading, error, data } = useQuery<
    unknown,
    unknown,
    { endPage: number }
  >(
    'endPage',
    async () => {
      const result = await caxios.get<number>('/posts/count');
      if (result.status >= 400) throw Error('400 error');
      return { endPage: Math.ceil(result.data / 5) };
    },
    { staleTime: 180 }
  );

  return { isLoading, error, data };
};

export { useEndPage };
