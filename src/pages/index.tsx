import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import caxios from 'src/lib/axios';

import { Post } from 'types/post';
import { PostBox } from 'src/stories/components/post-box';
import { Layout } from 'src/stories/components/layout';

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Shorecrab&apos;s blog</title>
        <meta name="description" content="shorecrab's dev blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {posts.map(post => (
          <PostBox {...post} key={+post.id} />
        ))}
      </Layout>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const posts = await caxios.get('/posts?limit=5&offset=0');

    return {
      props: { posts: posts.data },
    };
  } catch (err: any) {
    console.error(err.data);
    return {
      props: { posts: [] },
    };
  }
}
