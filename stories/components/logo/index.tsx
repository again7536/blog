import styled from 'styled-components';
import { useRouter } from 'next/router';

const LogoStyle = styled.div.attrs(props => ({
  ...props,
}))`
  vertical-align: baseline;
  text-align: ${(props: any) => props.textAlign ?? 'center'};
  line-height: 24pt;
  font-size: 18pt;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    font-size: 14pt;
  }
`;

const Logo = (props: any) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <LogoStyle {...props} onClick={handleClick}>
      Shorecrab.blog
    </LogoStyle>
  );
};

export { Logo };
