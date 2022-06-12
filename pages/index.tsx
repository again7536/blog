import type { NextPage, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { Navigation } from '../stories/components/navigation/navigation';
import { PostBox } from '../stories/components/post-box/post-box';
import styles from '../styles/Home.module.css';

interface Post {
  imgUrl: string;
  title: string;
  summary: string;
}
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
      <main className="container">
        <Navigation />
        <section>
          {posts.map(post => (
            <PostBox
              key={post.title}
              imgUrl={post.imgUrl}
              title={post.title}
              summary={post.summary}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  const posts = await fetch('/api/pages');
  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  try {
    const res = await fetch('/api/pages');
    const posts = await res.json();

    // const paths = posts.map(post => {
    //   params: {
    //     id: post.id;
    //   }
    // });

    // return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error(err);
  }
}
