import { SearchBar } from '../search-bar/search-bar';
import { Navigation, NavLink } from '../navigation';
import { Logo } from '../logo';
import { NavCol } from './nav-col';
import { useBreakpoint } from 'lib/hooks/useBreakpoint';
import { LayoutBackground } from './background';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <main className="container">
        <div className="row">
          <NavCol className="col-8 col-sm-4 col-md-3 col-xxl-2 px-0">
            {/* Logo, SearchBar 높이를 패딩으로 조절해서 맞춤 */}
            <Logo
              className="pt-2 pb-3 px-3"
              textAlign={breakpoint === 'xs' ? 'left' : 'center'}
            />
            <hr className="mt-0" />
            <Navigation className="d-none d-sm-block">
              <NavLink href="#" color="red">
                개발
              </NavLink>
              <NavLink href="#" color="blue">
                느낀점
              </NavLink>
              <NavLink href="/posts/new" color="green">
                글쓰기
              </NavLink>
            </Navigation>
          </NavCol>
          <div className="col-4 col-sm-8 col-md-9 col-xxl-10 p-0">
            <SearchBar className="py-3" />
            <hr className="mt-0" />
            <section className={breakpoint === 'xs' ? 'd-none' : 'ps-3'}>
              {children}
            </section>
          </div>
        </div>
        <div className={breakpoint !== 'xs' ? 'd-none' : 'row mt-3'}>
          <section>{children}</section>
        </div>
      </main>
      <LayoutBackground></LayoutBackground>
    </>
  );
};

export { Layout };
