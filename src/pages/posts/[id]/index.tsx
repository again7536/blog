import { GetStaticPropsContext } from 'next';

import { Layout } from 'src/stories/components/layout';
import { MarkdownView } from 'src/stories/components/markdown-view';
import caxios from 'src/lib/axios';

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
    const result: any = await caxios.get('/posts/' + context.params?.id);

    return {
      props: { post: result.data.markdown },
    };
  } catch (err: any) {
    console.error(err.data);
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const posts = await caxios.get('/posts');
    const paths = posts.data.map((post: any) => ({
      params: { id: '' + post.id },
    }));

    return { paths, fallback: 'blocking' };
  } catch (err: any) {
    console.error(err.data);
  }
}
