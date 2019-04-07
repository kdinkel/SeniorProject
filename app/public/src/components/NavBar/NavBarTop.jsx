import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import queryString from 'query-string';

const parse = num => {
  const values = queryString.parse(num);
  return values.num;
}

var numba = parse(window.location.search);
if (numba == undefined) numba = "";

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
            <a href="/" styleName="brand2" className="nav-brand pull-right">
              <input type="text" id="Nnumber" styleName="text-line" value={numba}/>
            </a>
          </div>
          <div styleName="listDiv" className="collapse navbar-collapse">
            <ul styleName="list" className="nav navbar-nav">
              <li><Link to={"/details?num=" + numba}>Details</Link></li>
              <li><Link to={"/maintenance?num=" + numba}>Maintenance</Link></li>
              <li><Link to={"/discrepancies?num=" + numba}>Discrepancies</Link></li>
              <li><Link to={"/flight?num=" + numba}>Flight</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CSSModules(NavBarTop, styles);
