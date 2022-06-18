import styled from 'styled-components';
import { Navigation, NavLink, AdminNavLink } from '../navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Button, LoginButton } from '../button';
import { SearchBar } from '../search-bar';

interface MenuProps {
  open: boolean;
  closeMenu: () => void;
}

const MenuContainer = styled.div<{ open: boolean }>`
  transition: 0.3s ease-in-out;
  transform: translateX(${props => (props.open === true ? '-250px' : '0px')});

  box-shadow: 0 0 2px 2px #3c3c3c20;

  height: 100vh;
  background-color: white;
  padding: 10px 15px 0 5px;

  position: fixed;
  top: 0;
  width: 250px;
  right: -250px;
  z-index: 2;
`;

const Menu = ({ open, closeMenu }: MenuProps) => {
  return (
    <MenuContainer open={open}>
      <div className="d-flex align-items-center">
        <LoginButton />
        <div className="col" />
        <Button color="red" onClick={closeMenu}>
          <FontAwesomeIcon icon={faClose} className="fa-xl" />
        </Button>
      </div>
      <SearchBar />
      <Navigation>
        <NavLink href="#" color="red">
          개발
        </NavLink>
        <NavLink href="#" color="blue">
          느낀점
        </NavLink>
        <AdminNavLink href="/posts/new" color="green">
          글쓰기
        </AdminNavLink>
      </Navigation>
    </MenuContainer>
  );
};

export { Menu };
