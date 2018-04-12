import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <Drawer width={200} 
                    openSecondary={true} 
                    open={this.props.isToogle}
                    docked={false} 
                    onRequestChange={(open) => { this.props.toogle()}}>
                <MenuItem onClick={this.props.toogle}>Home</MenuItem>
                <MenuItem onClick={this.props.toogle}>Page 1</MenuItem>
                <MenuItem onClick={this.props.toogle}>Page 2</MenuItem>
            </Drawer>
        )
    }
}

export default DrawerComponent;