import React, { Component } from 'react';

import './App.css';
import NavigationBar from './components/NavigationBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'




class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <NavigationBar />
        </MuiThemeProvider>
    );
  }
}

export default App;
