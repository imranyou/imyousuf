import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ImageAvator from './ImageAvator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


function handleClick() {
    alert('onClick triggered on the title component');
}


const styles = {
    title: {
        cursor: 'pointer',
    },
    button: {
        margin: 12,
    },
    appBackgroundColor: {
        backgroundColor: '#311B92',
    }
};


class NavigationBar extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title={<span style={styles.title}>Imran Yousuf</span>}
                    onTitleClick={handleClick}
                    iconElementLeft={<IconButton><ImageAvator /></IconButton>}
                    style={styles.appBackgroundColor}

                >

                    <RaisedButton href="https://github.com/callemall/material-ui"
                                  secondary={true}
                                  label="Resume"
                                  style={styles.button}
                                  icon={<FontIcon className="muidocs-icon-custom-github" />}
                    />

                    <RaisedButton href="https://github.com/callemall/material-ui"
                                  secondary={true}
                                  label="Resume"
                                  style={styles.button}
                                  icon={<FontIcon className="muidocs-icon-custom-github" />}
                    />

                    <RaisedButton href="https://github.com/callemall/material-ui"
                                  secondary={true}
                                  label="Resume"
                                  style={styles.button}
                                  icon={<FontIcon className="muidocs-icon-custom-github" />}
                    />

                </AppBar>

            </MuiThemeProvider>
        );
    }
}

export default NavigationBar;
