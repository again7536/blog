import styled from 'styled-components';

const PostBoxContainer = styled.div.attrs(props => ({
  className: 'container mb-4',
  ...props,
}))`
  cursor: pointer;
`;

export { PostBoxContainer };
