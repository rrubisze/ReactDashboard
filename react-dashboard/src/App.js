import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HostComponent from './Components/HostComponent'

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <HostComponent/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
