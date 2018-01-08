import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';


const style = {margin: 2};

class ImageAvator extends Component {
    render() {
        return (
                <Avatar
                    src="./img/imran.jpg"
                    size={25}
                    style={style}
                />
        );
    }
}

export default ImageAvator;
