import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Slideshow from '../Slideshow';

import { LayoutRow } from '../Layout';

import styles from './styles.css';

export const IntroPage = () => {
  return (
    <LayoutRow>
      <div className="container">
        <h1 styleName="title">
          UAS Digital Logbook

        </h1>
      </div>
      <Slideshow />
    </LayoutRow>
  );
};

export default CSSModules(IntroPage, styles);
