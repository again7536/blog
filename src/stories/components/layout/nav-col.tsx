import { useBreakpoint, breakpoints } from 'src/lib/hooks/useBreakpoint';
import styled from 'styled-components';
import { Logo } from '../logo';
import { Navigation, NavLink, AdminNavLink } from '../navigation';

const NavColContainer = styled.div`
  height: 100vh;

  @media screen and (max-width: ${breakpoints.md}) {
    height: auto;
  }
`;

const NavCol = () => {
  const breakpoint = useBreakpoint();
  return (
    <NavColContainer className="col-6 col-sm-6 col-md-3 col-xxl-2 px-0">
      {/* Logo, SearchBar 높이를 패딩으로 56px로 조절해서 맞춤 */}
      <Logo
        style={{
          height: '56px',
          paddingLeft: breakpoint === 'md' ? '15px' : null,
        }}
        textAlign={breakpoint === 'md' ? 'left' : 'center'}
      />
      <hr className="mt-0" />
      <Navigation className="d-none d-md-block">
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
