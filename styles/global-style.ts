//  SPDX-FileCopyrightText: 2016 Patrick Marsceill <jane@example.com>
//  SPDX-License-Identifier: MIT

//  Modified : 2022 Junyoung Lee <hongxing107@gmail.com>

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::selection {
    color: $white;
    background: $link-color;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: $body-font-family;
    font-size: inherit;
    line-height: $body-line-height;
    color: $body-text-color;
    background-color: $body-background-color;
  }

  ol,
  ul,
  dl,
  pre,
  address,
  blockquote,
  table,
  div,
  hr,
  form,
  fieldset,
  noscript .table-wrapper {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 1em;
    font-weight: 500;
    line-height: $body-heading-line-height;
    color: $body-heading-color;
  }

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  a {
    color: $link-color;
    text-decoration: none;
  }

  a:not([class]) {
    text-decoration: none;
    background-image: linear-gradient($border-color 0%, $border-color 100%);
    background-repeat: repeat-x;
    background-position: 0 100%;
    background-size: 1px 1px;

    &:hover {
      background-image: linear-gradient(
        rgba($link-color, 0.45) 0%,
        rgba($link-color, 0.45) 100%
      );
      background-size: 1px 1px;
    }
  }

  code {
    font-family: $mono-font-family;
    font-size: 0.75em;
    line-height: $body-line-height;
  }

  figure,
  pre {
    margin: 0;
  }

  li {
    margin: 0.25em 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    height: 1px;
    padding: 0;
    margin: $sp-6 0;
    background-color: $border-color;
    border: 0;
  }
`;

export default GlobalStyle;