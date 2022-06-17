import { useState, useEffect } from 'react';
import { SearchBar } from '../search-bar';
import { NavCol } from './nav-col';
import { LayoutBackground } from './background';
import { LoginButton, Button } from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../menu';
import { useBreakpoint } from 'src/lib/hooks/useBreakpoint';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const breakpoint = useBreakpoint();

  const handleMenuClick = () => setOpenMenu(!openMenu);
  const handleClose = () => setOpenMenu(false);

  useEffect(() => {
    if (breakpoint !== 'xs') handleClose();
  }, [breakpoint]);

  return (
    <>
      <main className="container overflow-hidden">
        <div className="row">
          <NavCol />
          <div className="col-6 col-sm-8 col-md-9 col-xxl-10 p-0">
            {/* PC */}
            <div className="align-items-center d-none d-sm-flex">
              <SearchBar />
              <LoginButton />
            </div>

            {/* 모바일 */}
            <div
              className="w-100 d-flex d-sm-none justify-content-end align-items-center px-3"
              style={{ height: '56px' }}
            >
              <Button color="red" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} className="fa-xl" />
              </Button>
            </div>

            <hr className="mt-0" />
            {/* PC */}
            <section className="d-none d-sm-block m-4">{children}</section>
          </div>
        </div>
        {/* 모바일 */}
        <div className="d-sm-none row mt-3">
          <section>{children}</section>
        </div>
        <Menu open={openMenu} closeMenu={handleClose}></Menu>
      </main>
      <LayoutBackground />
    </>
  );
};

export { Layout };
