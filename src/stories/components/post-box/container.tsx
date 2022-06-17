import styled from 'styled-components';

const PostBoxContainer = styled.div.attrs(props => ({
  className: 'container mb-4',
  ...props,
}))`
  cursor: pointer;
  border: 1px solid #3c3c3c20;
  box-shadow: 0 0 5px 2px #3c3c3c20;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-width: 800px;
  height: 270px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 180px;
    padding-right: 10px;

    flex-direction: row;
  }
`;

export { PostBoxContainer };
