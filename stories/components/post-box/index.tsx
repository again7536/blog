import { useRouter } from 'next/router';
import { PostBoxContainer } from './container';
import { PostBoxImage } from './image';

interface PostBoxProps {
  title: string;
  postUrl: string;
  imgUrl?: string;
  summary?: string;
}

const PostBox = ({ imgUrl, postUrl, title, summary }: PostBoxProps) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push('posts/' + postUrl);
  };

  return (
    <PostBoxContainer onClick={handleClick}>
      <div className="row">
        <PostBoxImage src={imgUrl} />
        <div className="col">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </div>
    </PostBoxContainer>
  );
};

export { PostBox };
