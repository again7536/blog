import { SearchBar } from '../search-bar/search-bar';
import { Navigation, NavLink } from '../navigation';
import { Logo } from '../logo';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  const breakpoint = useBreakpoint();

  return (
    <main className="container">
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3 col-xl-2">
          <Logo className="mt-3 mb-4" />
          <Navigation className="d-none d-sm-block">
            <NavLink href="#" color="red">
              개발
            </NavLink>
            <NavLink href="#" color="blue">
              느낀점
            </NavLink>
          </Navigation>
        </div>
        <div className="col-6 col-sm-8 col-xl-10">
          <SearchBar className="mt-3 mb-4" />
          <section className={breakpoint === 'xs' ? 'd-none' : undefined}>
            {children}
          </section>
        </div>
      </div>
      <div className={breakpoint !== 'xs' ? 'd-none' : 'row'}>
        <section>{children}</section>
      </div>
    </main>
  );
};

export { Layout };
