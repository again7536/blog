import styled from 'styled-components';

interface NavLinkProps {
  color: string;
  [key: string]: string;
}

const Navigation = styled.nav.attrs(props => ({
  className: 'nav flex-column ' + props.className,
}))``;

const NavLink = styled.a.attrs((props: NavLinkProps) => ({
  ...props,
  className: 'nav-link',
}))`
  color: ${props => props.theme.colors[props.color]};
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.colors[props.color]};
    color: white;
  }

  &:focus,
  &:active {
    box-shadow: none;
  }
`;

export { Navigation, NavLink };
