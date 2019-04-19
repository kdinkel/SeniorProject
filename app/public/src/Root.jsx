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
//import Register from './components/Register';
import styles from './styles.css';

const parse = num => {
  const values = queryString.parse(num);
  return values.num;
}

var details = [
  {
    "id": "FA3PFERNFH",
    "make": "QuadTrainer",
    "model": "250mm",
    "owner": "Andrew Ortega",
    "poc": "Andrew: andrew.ortega@ufl.edu"
  }, {
    "id": "FA3PXR4KYC",
    "make": "UF UASRP",
    "model": "Scorpion v1",
    "owner": "University of Florida",
    "poc": "Andrew: andrew.ortega@ufl.edu"
  }, {
    "id": "FA37AR7PTC",
    "make": "UF UASRP",
    "model": "UF4000",
    "owner": "Wildlife Ecology and Conservation",
    "poc": "Peter: (352) 348-1299"
  }, {
    "id": "N302UF",
    "make": "DJI",
    "model": "S1000",
    "owner": "UF UASRP",
    "poc": "Chad: tripp@ufl.edu"
  }, {
    "id": "FA62AREH3R",
    "make": "UF UASRP",
    "model": "UF10000",
    "owner": "Archer Aviation",
    "poc": "Kalem: (407) 404-3215"
  }
];

var logs = [
  {
    "id": "FA3PFERNFH",
    "date": "4/19/2019",
    "title": "Prop Ajustment",
    "description": "Tightened prop nuts",
    "name": "Kalem"
  }, {
    "id": "FA3PFERNFH",
    "date": "4/06/2019",
    "title": "Flat Tire",
    "description": "filled to 30 psi",
    "name": "Kalem"
  }, {
    "id": "FA3PFERNFH",
    "date": "1/2/2019",
    "title": "Remove Ligma",
    "description": "check every 20 hrs",
    "name": "A. Ortega"
  }, {
    "id": "FA3PXR4KYC",
    "date": "1/2/2019",
    "title": "Replaced Bumpers",
    "description": "N/A",
    "name": "Matt"
  }, {
    "id": "N302UF",
    "date": "4/06/2019",
    "title": "Replace Autopilot",
    "description": "Light Bridge unit; DJI",
    "name": "Andrew"
  }, {
    "id": "N302UF",
    "date": "2/6/2019",
    "title": "Mount Lidar Payload",
    "description": "aprox 4 lbs; PRECIOUS CARGO",
    "name": "A. Ortega"
  }, {
    "id": "FA62AREH3R",
    "date": "4/18/2019",
    "title": "Replaced blown ESC",
    "description": "front left; channel 2",
    "name": "Kalem"
  }, {
    "id": "FA62AREH3R",
    "date": "4/15/2019",
    "title": "new GPS",
    "description": "Old GPS is not compatible with px4",
    "name": "Chris"
  }, {
    "id": "FA62AREH3R",
    "date": "4/2/2019",
    "title": "Reinforce gear",
    "description": "stiffened front gear. shouldnt wobble on the ground anymore",
    "name": "Jack"
  }, {
    "id": "FA62AREH3R",
    "date": "3/28/2019",
    "title": "Replaced All Props",
    "description": "GetFPV 5x5.2x3; from eVTOL order 18",
    "name": "K.Dinkel"
  }
];

var discs = [
  {
    "id": "FA3PFERNFH",
    "date": "3/29/2019",
    "description": "Broken propellor",
    "resolution": "Replaced with 5x4.5x3",
    "name": "Kalem"
  }
];

var flights = [
  {
    "id": "FA3PFERNFH",
    "date": "4/17/2019",
    "time": "13:22",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA3PFERNFH",
    "date": "4/12/2019",
    "time": "16:41",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA3PFERNFH",
    "date": "4/09/2019",
    "time": "09:04",
    "location": "Vet Med",
    "pic": "Connor Bass"
  }, {
    "id": "FA3PFERNFH",
    "date": "4/08/2019",
    "time": "13:00",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA3PFERNFH",
    "date": "4/08/2019",
    "time": "09:22",
    "location": "Vet Med",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA3PFERNFH",
    "date": "4/02/2019",
    "time": "09:45",
    "location": "Vet Med",
    "pic": "Conner Bass"
  }, {
    "id": "FA3PFERNFH",
    "date": "3/28/2019",
    "time": "12:00",
    "location": "Hume Field",
    "pic": "Andrew Ortega"
  }, {
    "id": "FA3PFERNFH",
    "date": "3/21/2019",
    "time": "07:16",
    "location": "Vet Med",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA37AR7PTC",
    "date": "4/09/2019",
    "time": "09:04",
    "location": "Vet Med",
    "pic": "Connor Bass"
  }, {
    "id": "FA37AR7PTC",
    "date": "4/08/2019",
    "time": "13:00",
    "location": "Solar Park",
    "pic": "Connor Bass"
  }, {
    "id": "FA37AR7PTC",
    "date": "4/08/2019",
    "time": "09:22",
    "location": "Vet Med",
    "pic": "Connor Bass"
  }, {
    "id": "N302UF",
    "date": "4/08/2019",
    "time": "09:22",
    "location": "Footbal Stadium",
    "pic": "Andrew Ortega"
  }, {
    "id": "N302UF",
    "date": "4/02/2019",
    "time": "09:45",
    "location": "Vet Med",
    "pic": "Andrew Ortega"
  }, {
    "id": "FA62AREH3R",
    "date": "4/17/2019",
    "time": "13:22",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA62AREH3R",
    "date": "4/12/2019",
    "time": "16:41",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA62AREH3R",
    "date": "4/09/2019",
    "time": "09:04",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }, {
    "id": "FA62AREH3R",
    "date": "4/08/2019",
    "time": "13:00",
    "location": "Solar Park",
    "pic": "Kalem Dinkel"
  }
];

var renderedDetails =[];

for (var i =0; i < details.length; i++) {
  if (details[i].id === parse(window.location.search)) {
    renderedDetails.push(
      <tr>
        <td>{details[i].id}</td>
        <td>{details[i].make}</td>
        <td>{details[i].model}</td>
        <td>{details[i].owner}</td>
        <td>{details[i].poc}</td>
      </tr>
    );
  }
}

var renderedLogs =[];

for (var i =0; i < logs.length; i++) {
  if (logs[i].id === parse(window.location.search)) {
    renderedLogs.push(
      <tr>
        <td>{logs[i].date}</td>
        <td>{logs[i].title}</td>
        <td>{logs[i].description}</td>
        <td>{logs[i].name}</td>
      </tr>
    );
  }
}

var renderedDiscs =[];

for (var i =0; i < discs.length; i++) {
  if (discs[i].id === parse(window.location.search)) {
    renderedDiscs.push(
      <tr>
        <td>{discs[i].date}</td>
        <td>{discs[i].description}</td>
        <td>{discs[i].resolution}</td>
        <td>{discs[i].name}</td>
      </tr>
    );
  }
}

var renderedFlights =[];

for (var i =0; i < flights.length; i++) {
  if (flights[i].id === parse(window.location.search)) {
    renderedFlights.push(
      <tr>
        <td>{flights[i].date}</td>
        <td>{flights[i].time}</td>
        <td>{flights[i].location}</td>
        <td>{flights[i].pic}</td>
      </tr>
    );
  }
}

const Details = (props) => {
  return (
    <ContentPage>
      <h1>Airframe Details</h1>
      <table>
        <tr>
          <th>Registration</th>
          <th>Make</th>
          <th>Model</th>
          <th>Owner</th>
          <th>Point of Contact</th>
        </tr>
        {renderedDetails}
      </table>
    </ContentPage>
  );
};

const MntcLogs = (props) => {
  return (
    <ContentPage>
      <h1>Maintenance Logs</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Description</th>
          <th>Signed</th>
        </tr>
        {renderedLogs}
      </table>
    </ContentPage>
  );
};

const DiscLogs = (props) => {
  return (
    <ContentPage>
      <h1>Discrepancy Logs</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Resolution</th>
          <th>Signed</th>
        </tr>
        {renderedDiscs}
      </table>
    </ContentPage>
  );
};

const FlightLogs = (props) => {
  return (
    <ContentPage>
      <h1>Flight Logs</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Pilot in Command</th>
        </tr>
        {renderedFlights}
      </table>
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
