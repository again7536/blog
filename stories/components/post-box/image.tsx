import styled from 'styled-components';

const PostBoxImage = styled.img.attrs(props => ({
  className: 'col-12 col-sm-12 col-md-6 col-xl-4 ' + props.className,
  src: props.src,
}))`
  height: 150px;
  max-width: 300px;

  object-fit: cover;

  @media screen and (max-width: 576px) {
    max-width: none;
  }
`;

export { PostBoxImage };
