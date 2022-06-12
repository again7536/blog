import styled from 'styled-components';
import Image from 'next/image';

const PostBoxContainer = styled.div.attrs(props => ({
  className: 'container',
  ...props,
}))`
  height: 200px;
`;

const PostBoxImage = styled.img.attrs(props => ({
  className: 'col-12 col-sm-6 col-md-4',
  src: props.src,
}))`
  height: 200px;
  object-fit: cover;
`;

interface PostBoxProps {
  imgUrl: string;
  title: string;
  summary: string;
}

const PostBox = ({ imgUrl, title, summary }: PostBoxProps) => {
  return (
    <PostBoxContainer>
      <div className="row">
        <PostBoxImage src={imgUrl} />
        <div className="col-12 col-sm-6 col-md-8">
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>
    </PostBoxContainer>
  );
};

export { PostBox };
