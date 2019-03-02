import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import {data} from './data';


import './App.css';

import Sidebar from './components/Sidebar';
import NavigationLink from './components/NavigationLink';
import SummaryCards from './components/SummaryCards';

import SalesChart from './components/SalesChart';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      counter: 0,
    };
    
  }

  render() {
    return (
      <div className="App m-5">


          <div className="container-fluid border">
            <div className="row d-flex align-items-stretch">

              <Sidebar links="adminPages"/>

              <div className="main-panel col-md-10 px-3">

                <header>

                  <div className="search-bar"></div>

                  <div className="page-heading mt-5 mb-4">
                    <div className="row">
                    
                      <div className="col"><h1 className="h2">Dashboard</h1></div>
                      <div className="col text-right"><button className="btn btn-success">Download Data</button></div>
                 
                    </div>
                  </div>

                </header>

                <SummaryCards data="Sales,Revenue,Profit,Fees" />

                <div className="container row mt-3">

                  <div class="col-9">
                    <SalesChart />
                  </div>

                  <div className="col-3">
                  </div>

                </div>

              </div>
              
            </div>
          </div>


      </div>
    );
  }
}

export default App;
