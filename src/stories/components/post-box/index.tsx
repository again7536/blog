import { useRouter } from 'next/router';
import { PostBoxContainer } from './container';
import { PostBoxImage } from './image';
import { PostBoxParagraph } from './paragraph';

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
      <PostBoxImage src={'static/' + imgUrl?.slice(7)} />
      <div className="p-2 px-md-3 col-12 col-md-7 col-xl-8">
        <h4>{title}</h4>
        <PostBoxParagraph>{summary}</PostBoxParagraph>
      </div>
    </PostBoxContainer>
  );
};

export { PostBox };
