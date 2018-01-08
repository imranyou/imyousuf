import React, { Component } from 'react';

import './App.css';
import NavigationBar from './components/NavigationBar';
import HomeMainCard from './components/HomeMainCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'




class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <NavigationBar />
            <HomeMainCard />
        </MuiThemeProvider>
    );
  }
}

export default App;
