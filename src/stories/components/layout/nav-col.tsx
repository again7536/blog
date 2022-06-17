import { useBreakpoint } from 'src/lib/hooks/useBreakpoint';
import styled from 'styled-components';
import { Logo } from '../logo';
import { Navigation, NavLink, AdminNavLink } from '../navigation';

const NavColContainer = styled.div`
  height: 100vh;
  background-color: #3c3c3c10;

  @media screen and (max-width: 576px) {
    height: auto;
    background-color: unset;
  }
`;

const NavCol = () => {
  const breakpoint = useBreakpoint();
  return (
    <NavColContainer className="col-6 col-sm-4 col-md-3 col-xxl-2 px-0">
      {/* Logo, SearchBar 높이를 패딩으로 56px로 조절해서 맞춤 */}
      <Logo
        style={{
          height: '56px',
          paddingLeft: breakpoint === 'xs' ? '15px' : null,
        }}
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
        <AdminNavLink href="/posts/new" color="green">
          글쓰기
        </AdminNavLink>
      </Navigation>
    </NavColContainer>
  );
};

export { NavCol };
