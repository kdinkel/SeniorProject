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
        <p>
        Your source for easy UAS logs.
        1. Scan QR from your mobile device.
        2. Select from the log options in the Nav Bar.
        Happy Logging!
        </p>
      </div>
      <Slideshow />
    </LayoutRow>
  );
};

export default CSSModules(IntroPage, styles);
