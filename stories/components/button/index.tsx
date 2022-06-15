import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
  ...props,
  className: `btn`,
}))`
  color: ${props => props.theme.colors.red};

  &:hover {
    background-color: ${props => props.theme.colors.red100};
    color: white;
  }

  &:focus,
  &:active {
    box-shadow: none;
  }
`;

export { Button };
