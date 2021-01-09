import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navbar />
      <tr>
        <td>
          <CountriesList />
        </td>
        <td>
          <Route path='/countries/:thecca3' component={CountryDetails}></Route>
        </td>
      </tr>

    </div>
  );
}

export default App;
