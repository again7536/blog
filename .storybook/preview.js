import '!style-loader!css-loader!../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import GlobalStyle from 'src/styles/global-style';

addDecorator(storyFn => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
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
