import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const NavBarTop = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" styleName="navbar1">
      <div className="container">
        <div className="container-fluid">
          <div className="nav-header" styleName="navstyle">
            <button className="navbar-toggle collapsed">
              <span className="sr-only"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a href="/" styleName="brand1" className="nav-brand pull-left">
              <span>
                <div styleName="logo">
                  <img styleName="logo" src="./src/static/UASRP_Logo.png"/>
                </div>
              </span>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/details">Details</Link></li>
              <li><Link to="/maintenance">Maintenance</Link></li>
              <li><Link to="/discrepancies">Discrepancies</Link></li>
              <li><Link to="/flight">Flight</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CSSModules(NavBarTop, styles);
