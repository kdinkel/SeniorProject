import React from 'react';
import { Layout } from '../Layout';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Footer = () => {
  return (
    <footer className="container" styleName="container-fluid-mystyle">
      <Layout>
        <div className="">
          <ul className="list-group">
            <li className="list-group-item" styleName="Footer1">Report</li>
            <li className="list-group-item" styleName="Footer1"><a href="https://www.faa.gov/about/office_org/field_offices/fsdo/">Incident</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='https://drone-registration.net/lost-drone-form/'>Lost UAV</a></li>
          </ul>
        </div>
      </Layout>
    </footer>
  );
};

export default CSSModules(Footer, styles);
