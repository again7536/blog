import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/global-style';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
