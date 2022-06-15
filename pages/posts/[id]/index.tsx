import { GetStaticPropsContext } from 'next';
import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

import { Layout } from 'stories/components/layout';
import { MarkdownView } from 'stories/components/markdown-view';
import { Post } from 'types/post';

interface PostProps {
  post: string;
}

const PostPage = ({ post }: PostProps) => {
  return (
    <Layout>
      <div className="markdown-body">
        <MarkdownView post={post} />
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const db = await open({
      filename: 'db/blog.db',
      driver: sqlite3.Database,
    });

    const file: Post[] = await db.all(
      'SELECT * FROM posts WHERE id=' + context.params?.id
    );
    const post = fs.readFileSync(file[0].fileUrl).toString();

    return {
      props: { post },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const db = await open({
      filename: 'db/blog.db',
      driver: sqlite3.Database,
    });

    const posts = await db.all('SELECT * FROM posts');
    const paths = posts.map(post => ({
      params: { id: '' + post.id },
    }));

    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error(err);
  }
}
