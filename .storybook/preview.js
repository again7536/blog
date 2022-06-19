import '!style-loader!css-loader!../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!@fortawesome/fontawesome-svg-core/styles.css';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/global-style';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: false,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});

addDecorator(storyFn => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {storyFn()}
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
