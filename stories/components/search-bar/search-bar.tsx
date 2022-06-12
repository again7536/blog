import styled from 'styled-components';

const SearchBar = styled.input.attrs(props => ({
  className: `form-control`,
  type: 'search',
  ...props,
}))`
  color: ${props => props.theme.colors.red};

  &:focus,
  &:active {
    box-shadow: none;
    border-color: ${props => props.theme.colors.red};
  }
`;

export { SearchBar };
