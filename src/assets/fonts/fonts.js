import { createGlobalStyle } from 'styled-components';

import ArialRegularWoff from './ArialRegular.woff';
import ArialRegularWoff2 from './ArialRegular.woff2';

import LatoBoldWoff from  './Lato-Bold.woff';
import LatoBoldWoff2 from './Lato-Bold.woff2';

import LatoRegularWoff from './Lato-Regular.woff';
import LatoRegularWoff2 from './Lato-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Arial-Regular';
    src: local('Arial Regular'), local('ArialRegular'),
    url(${ArialRegularWoff2}) format('woff2'),
    url(${ArialRegularWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato-Regular';
    src: local('Lato Regular'), local('LatoRegular'),
    url(${LatoRegularWoff2}) format('woff2'),
    url(${LatoRegularWoff}) format('woff');
    font-style: regular;
  }

  @font-face {
    font-family: 'Lato-Bold';
    src: local('Lato Bold'), local('LatoBold'),
    url(${LatoBoldWoff2}) format('woff2'),
    url(${LatoBoldWoff}) format('woff');
    font-style: bold;
  }
`;