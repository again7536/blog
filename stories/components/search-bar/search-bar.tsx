import styled from 'styled-components';

const SearchBar = styled.input.attrs(props => ({
  ...props,
  className: 'form-control ' + props.className,
  type: 'search',
}))`
  color: ${props => props.theme.colors.red};

  &:focus,
  &:active {
    box-shadow: none;
    border-color: ${props => props.theme.colors.red};
  }
`;

export { SearchBar };
