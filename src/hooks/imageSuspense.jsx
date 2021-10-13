/* eslint-disable no-underscore-dangle */

import styled from 'styled-components';
// import { useEffect } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
const imgCache = {
  __cache: {},
  read(src) {
    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache[src]);
        };
        img.src = src;
      }).then(() => {
        // this.__cache[src] = true;
      });
    }
    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }
    return this.__cache[src];
  },
};

const ImgCarrosselCss = styled.img`
  width: 100%;
  max-width: 800px;
  position: absolute;
  z-index: 150;
  @media (max-width: 908px) {
    border-radius: 4px 4px 0px 0px;
  }
`;

export const SuspenseImg = ({ src, ...rest }) => {
  imgCache.read(src);
  return <ImgCarrosselCss src={src} {...rest} />;
};
