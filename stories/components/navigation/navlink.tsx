import styled from 'styled-components';
import Link from 'next/link';

interface NavLinkProps {
  color: string;
  href: string;
  className?: string;
  children?: JSX.Element | JSX.Element[] | string;
}
interface StyledNavLinkProps {
  color: string;
  className: string;
}

const StyledNavLink = styled.a.attrs((props: StyledNavLinkProps) => ({
  ...props,
  className: 'nav-link',
}))`
  color: ${props => props.theme.colors[props.color]};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors[props.color]};
    color: white;
  }

  &:focus,
  &:active {
    box-shadow: none;
  }
`;

const NavLink = (props: NavLinkProps) => {
  return (
    <Link href={props.href}>
      <StyledNavLink color={props.color}>{props.children}</StyledNavLink>
    </Link>
  );
};

export { NavLink };
