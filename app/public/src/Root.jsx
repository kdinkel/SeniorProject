import React, { Component } from 'react';
import { Provider } from 'react-redux';
import queryString from 'query-string';

// Overall Page Layout Components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Overall Page Layout Components
import { NavBarTop } from './components/NavBar';
import { Footer }    from './components/Footer';

// Top Navbar route Components
import IntroPage from './components/IntroPage';
import ContentPage from './components/ContentPage';
//import Details from './components/Details';
import Register from './components/Register';

const parse = num => {
  const values = queryString.parse(num);
  return values.num;
}

const Details = (props) => {
  return (
    <ContentPage>
      <h1>Airframe Details</h1>
      <h1>{parse(window.location.search)}</h1>
    </ContentPage>
  );
};

const MntcLogs = (props) => {
  return (
    <ContentPage>
      <h1>Maintenance Logs</h1>
      <h1>{parse(window.location.search)}</h1>
    </ContentPage>
  );
};

const DiscLogs = (props) => {
  return (
    <ContentPage>
      <h1>Discrepancy Logs</h1>
      <h1>{parse(window.location.search)}</h1>
    </ContentPage>
  );
};

const FlightLogs = (props) => {
  return (
    <ContentPage>
      <h1>Flight Logs</h1>
      <h1>{parse(window.location.search)}</h1>
    </ContentPage>
  );
};

const App = (props) => {
  return (
  <div>
		<NavBarTop />
    { props.children }
    <Footer />
	</div>
  );
};

export default class Root extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired,
  };

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={IntroPage} />
            <Route path="details" component={Details} />
            <Route path="maintenance" component={MntcLogs}>
            </Route>
            <Route path="discrepancies" component={DiscLogs} />
            <Route path="flight" component={FlightLogs} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
