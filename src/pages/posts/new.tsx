import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { Layout } from 'src/stories/components/layout';

const MarkdownEditor = dynamic<any>(
  () => import('src/stories/components/editor').then(mod => mod.MarkdownEditor),
  { ssr: false }
);

const PostNew = () => {
  return (
    <Layout>
      <MarkdownEditor />
    </Layout>
  );
};

export default PostNew;

export function getStaticProps(context: GetStaticPropsContext) {
  return { props: {} };
}
