import styled from 'styled-components';

const Navigation = styled.nav.attrs(props => ({
  className: `nav flex-column col-4`,
  ...props,
}))``;

const NavLink = styled.a.attrs(props => ({
  className: 'nav-link',
  ...props,
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

export { Navigation, NavLink };
