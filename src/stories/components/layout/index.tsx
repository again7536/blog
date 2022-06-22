import { useState, useEffect } from 'react';
import { SearchBar } from '../search-bar';
import { NavCol } from './nav-col';
import { LoginButton, Button } from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../menu';
import { useBreakpoint } from 'src/lib/hooks/useBreakpoint';

interface LayoutProps {
  children: (JSX.Element | null)[] | JSX.Element | null;
}

const Layout = ({ children }: LayoutProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const breakpoint = useBreakpoint();

  const handleMenuClick = () => setOpenMenu(!openMenu);
  const handleClose = () => setOpenMenu(false);

  useEffect(() => {
    if (breakpoint !== 'xs' && breakpoint !== 'sm') handleClose();
  }, [breakpoint]);

  return (
    <>
      <main className="container overflow-hidden">
        <div className="row">
          <NavCol />
          <div className="col-6 col-sm-6 col-md-9 col-xxl-10 p-0 bg-white">
            {/* PC */}
            <div className="align-items-center d-none d-md-flex">
              <SearchBar />
              <LoginButton />
            </div>

            {/* 모바일 */}
            <div
              className="w-100 d-flex d-md-none justify-content-end align-items-center px-3"
              style={{ height: '56px' }}
            >
              <Button color="red" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} className="fa-xl" />
              </Button>
            </div>

            <hr className="mt-0" />
            {/* PC */}
            <section className="d-none d-md-block m-4">{children}</section>
          </div>
        </div>
        {/* 모바일 */}
        <div className="d-md-none row mt-3 bg-white">
          <section>{children}</section>
        </div>
      </main>
      <Menu open={openMenu} closeMenu={handleClose}></Menu>
    </>
  );
};

export { Layout };
