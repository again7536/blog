import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/global-style';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
