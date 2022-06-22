import type { GetServerSidePropsContext } from 'next';
import { useRecoilValue } from 'recoil';
import Head from 'next/head';
import caxios from 'src/lib/axios';

import { Post } from 'types/post';
import { PostBox } from 'src/stories/components/post-box';
import { Layout } from 'src/stories/components/layout';
import { pageState } from 'src/atoms/page';
import { usePosts } from 'src/lib/hooks/usePosts';
import { Pagination } from 'src/stories/components/pagination';

interface HomeProps {
  initialPosts: Post[];
}

const Home = ({ initialPosts }: HomeProps) => {
  const page = useRecoilValue(pageState);
  const { isLoading, data, error } = usePosts(page, initialPosts);
  return (
    <>
      <Head>
        <title>Shorecrab&apos;s blog</title>
        <meta name="description" content="shorecrab's dev blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h2 className="mb-3">최근 포스팅</h2>
        <>
          {!isLoading && !error && data?.posts
            ? data.posts.map(post => <PostBox {...post} key={+post.id} />)
            : []}
        </>
        <Pagination paginationItemCount={5} />
      </Layout>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const posts = await caxios.get<Post[]>('/posts?limit=5&offset=0');

    return {
      props: { initialPosts: posts.data },
    };
  } catch (err: any) {
    console.error(err.data);
    return {
      props: { posts: [] },
    };
  }
}
