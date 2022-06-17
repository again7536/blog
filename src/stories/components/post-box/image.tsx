import styled from 'styled-components';

const PostBoxImage = styled.img.attrs(props => ({
  className: 'col-12 col-sm-12 col-md-5 col-xl-4 ' + props.className,
  src: props.src,
}))`
  min-width: 100%;
  max-height: 150px;

  padding: 0;

  object-fit: cover;

  @media screen and (min-width: 768px) {
    min-width: unset;
    max-height: unset;
    min-height: 100%;
  }
`;

export { PostBoxImage };
