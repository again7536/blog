import { GetStaticPropsContext } from 'next';
import fs from 'fs';

import { Layout } from '../../../stories/components/layout';
import { MarkdownView } from '../../../stories/components/markdown-view';

interface PostProps {
  post: string;
}

const Post = ({ post }: PostProps) => {
  return (
    <Layout>
      <div className="markdown-body">
        <MarkdownView post={post} />
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const post = fs
      .readFileSync(`public/posts/${context.params?.id}.md`)
      .toString();

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
    const posts = fs
      .readdirSync('public/posts')
      .map(file => file.split('.')[0]);

    const paths = posts
      .filter(file => file.match(/\.md$/))
      .map(post => ({
        params: {
          id: post,
        },
      }));

    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error(err);
  }
}
