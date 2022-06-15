import type { GetServerSidePropsContext } from 'next';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import Head from 'next/head';

import { Post } from 'types/post';
import { PostBox } from 'stories/components/post-box';
import { Layout } from 'stories/components/layout';

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
    const db = await open({
      filename: 'db/blog.db',
      driver: sqlite3.Database,
    });

    const posts = await db.all(`SELECT * FROM posts LIMIT 5`);
    return {
      props: { posts },
    };
  } catch (err) {
    console.error(err);
    return {
      props: { posts: [] },
    };
  }
}
