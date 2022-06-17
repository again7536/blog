import styled from 'styled-components';

const PostBoxParagraph = styled.p`
  overflow-wrap: break-word;
  overflow: hidden;
  margin: 0;
  height: 50px;

  @media screen and (min-width: 768px) {
    height: 100px;
  }
`;

export { PostBoxParagraph };
