import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';


const style = {margin: -10};

class ImageAvator extends Component {
    render() {
        return (
                <Avatar
                    backgroundColor={'#ff4081'}
                    style={style}
                >
                    IY
                </Avatar>
        );
    }
}

export default ImageAvator;
