import { GetStaticPropsContext } from 'next';

import { Layout } from 'src/stories/components/layout';
import { MarkdownView } from 'src/stories/components/markdown-view';
import caxios from 'src/lib/axios';
import { Post } from 'types/post';

const PostPage = (props: Post) => {
  return (
    <Layout>
      <div className="markdown-body">
        <MarkdownView {...props} />
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const result = await caxios.get<Post>('/posts/' + context.params?.id);

    return {
      props: { ...result.data },
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
    const posts = await caxios.get<Post[]>('/posts');
    if (!posts.data) return { paths: [], fallback: 'blocking' };

    const paths = posts.data.map((post: Post) => ({
      params: { id: '' + post.id },
    }));

    return { paths, fallback: 'blocking' };
  } catch (err: any) {
    console.error(err.data);
    return { paths: [], fallback: 'blocking' };
  }
}
