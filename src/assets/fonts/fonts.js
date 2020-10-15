import { createGlobalStyle } from 'styled-components';

import ArialRegularWoff from './ArialRegular.woff';
import ArialRegularWoff2 from './ArialRegular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Arial-Regular';
    src: local('Arial Regular'), local('ArialRegular'),
    url(${ArialRegularWoff2}) format('woff2'),
    url(${ArialRegularWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;