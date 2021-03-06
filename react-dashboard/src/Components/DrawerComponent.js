import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class DrawerComponent extends Component {

    render() {
        return (
            <Drawer width={200} 
                    openSecondary={true} 
                    open={this.props.isToogle}
                    docked={false} 
                    onRequestChange={(open) => { this.props.toogle()}}>
                <MenuItem onClick={this.props.toogle} containerElement={<Link to="/" />}>Home</MenuItem>
                <MenuItem onClick={this.props.toogle} containerElement={<Link to="/about" />}>About</MenuItem>
            </Drawer>
        )
    }
}

export default DrawerComponent;