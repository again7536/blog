import styled from 'styled-components';

const NavCol = styled.div`
  height: 100vh;
  background-color: #3c3c3c10;

  @media screen and (max-width: 576px) {
    height: auto;
    background-color: unset;
  }
`;

export { NavCol };
