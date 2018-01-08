import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const styles = {
    margin: 100,
    appBackgroundColor: {
        backgroundColor: '#311B92',
        zDepth: 10
    }
}

class HomeMainCard extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Card style={styles}>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                        avatar="images/jsa-128.jpg"
                        style={styles.appBackgroundColor}
                    />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="https://raw.githubusercontent.com/imranyou/imyousuf/master/src/img/imran.jpg" alt="" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default HomeMainCard;
