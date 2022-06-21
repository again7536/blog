import { useRouter } from 'next/router';
import { PostBoxContainer } from './container';
import { PostBoxImage } from './image';
import { PostBoxParagraph } from './paragraph';

interface PostBoxProps {
  id: number;
  title: string;
  imgUrl?: string;
  summary?: string;
}

const PostBox = ({ id, imgUrl, title, summary }: PostBoxProps) => {
  const router = useRouter();
  const handleClick = async () => {
    router.push('posts/' + id);
  };

  return (
    <PostBoxContainer onClick={handleClick}>
      <PostBoxImage src={imgUrl} />
      <div className="p-2 px-md-3 col-12 col-md-7 col-xl-8">
        <h4>{title}</h4>
        <PostBoxParagraph>{summary}</PostBoxParagraph>
      </div>
    </PostBoxContainer>
  );
};

export { PostBox };
