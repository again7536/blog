import { useQuery } from 'react-query';
import caxios from 'src/lib/axios';

const useAuth = () => {
  const { isLoading, error, data } = useQuery<
    unknown,
    unknown,
    { authLevel: string }
  >('authLevel', async () => {
    const result = await caxios.get('/auth/verify');
    if (result.status >= 400) throw Error('400 error');
    return result.data;
  });

  return { isLoading, error, data };
};

export { useAuth };
