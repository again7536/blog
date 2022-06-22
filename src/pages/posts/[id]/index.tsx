import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout } from 'src/stories/components/layout';
import { MarkdownView } from 'src/stories/components/markdown-view';
import caxios from 'src/lib/axios';
import { Post } from 'types/post';
import { Button } from 'src/stories/components/button';
import { useAuth } from 'src/lib/hooks/useAuth';

const PostPage = (props: Post) => {
  const router = useRouter();
  const { isLoading, error, data } = useAuth();
  const handleDelete = async () => {
    try {
      await caxios.delete(`/posts/${props.id}`);
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="markdown-body mb-4">
        <MarkdownView {...props} />
      </div>
      {!isLoading && !error ? (
        <>
          <Button color="blue">
            <Link href={`/posts/new?id=${props.id}`}>수정</Link>
          </Button>
          <Button color="red" onClick={handleDelete}>
            삭제
          </Button>
        </>
      ) : null}
    </Layout>
  );
};

export default PostPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const result = await caxios.get<Post>('/posts/' + context.params?.id);

    return {
      props: { ...result.data, id: context.params?.id },
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
