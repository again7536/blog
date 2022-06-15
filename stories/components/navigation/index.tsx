import styled from 'styled-components';
import { NavLink } from './navlink';

const Navigation = styled.nav.attrs(props => ({
  className: 'nav flex-column ' + props.className,
}))``;

export { Navigation, NavLink };
