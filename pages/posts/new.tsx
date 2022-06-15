import { GetStaticPropsContext } from 'next';
import { Layout } from '../../stories/components/layout';
import { PostForm } from '../../stories/components/post-form';

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
