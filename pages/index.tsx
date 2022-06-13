import type { GetServerSidePropsContext } from 'next';
import fs from 'fs';
import Head from 'next/head';

import { PostBox } from '../stories/components/post-box';
import { Layout } from '../stories/components/layout';

type FileList = string[];
interface Post {
  title: string;
  imgUrl?: string;
  summary?: string;
}
interface HomeProps {
  posts: FileList;
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
          <PostBox title={post} postUrl={post} key={post} />
        ))}
      </Layout>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const posts = fs
    .readdirSync('public/posts')
    .slice(0, 5)
    .filter(file => file.match(/\.md$/))
    .map(file => file.split('.')[0]);

  return {
    props: { posts },
  };
}
