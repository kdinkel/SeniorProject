import React, { Component } from 'react';

import { Router, Route, IndexRoute } from 'react-router';

// Overall Page Layout Components
import { NavBarTop } from '../components/NavBar';
import { Footer }    from '../components/Footer';

// Top Navbar route Components
import IntroPage from '../components/IntroPage';


const App = (props) => {
  return (
  <div>
		<NavBarTop />
    <div styleName="space">
      { props.children }
    </div>
    <Footer />
	</div>
  );
};


export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={IntroPage} />
      <Route path="/intro" component={IntroPage} />
      <Route path="/page1" component={IntroPage} />
      <Route path="/page2" component={IntroPage} />
      <Route path="/page3" component={IntroPage} />
      /*
      <Route path="/signin" component={IntroPage} />
      <Route path="/register" component={IntroPage} />
      */
    </Route>
  </Router>
);
