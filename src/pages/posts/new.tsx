import { GetStaticPropsContext } from 'next';
import { Layout } from 'src/stories/components/layout';
import { PostForm } from 'src/stories/components/post-form';

const PostNew = () => {
  return (
    <Layout>
      <PostForm />
    </Layout>
  );
};

export default PostNew;

export function getStaticProps(context: GetStaticPropsContext) {
  return { props: {} };
}
