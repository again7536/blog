import { useRouter } from 'next/router';
import { PostBoxContainer } from './container';
import { PostBoxImage } from './image';

interface PostBoxProps {
  id: number;
  title: string;
  fileUrl: string;
  imgUrl?: string;
  summary?: string;
}

const PostBox = ({ id, imgUrl, fileUrl, title, summary }: PostBoxProps) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push('posts/' + id);
  };

  return (
    <PostBoxContainer onClick={handleClick}>
      <div className="row">
        <PostBoxImage src={'static/' + imgUrl?.slice(7)} />
        <div className="col">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </div>
    </PostBoxContainer>
  );
};

export { PostBox };
