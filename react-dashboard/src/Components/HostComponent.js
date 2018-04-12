import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import DrawerComponent from './DrawerComponent';

class HostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isToogle: false };

        this.toogle = this.toogle.bind(this);
    }

    toogle() {
        this.setState(prevState => ({
            isToogle: !prevState.isToogle
        }));
        console.log(this.state.isToogle);
    }
    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <ActionHome></ActionHome>
                        <ToolbarTitle text="Hello World"></ToolbarTitle>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <IconButton>
                            <NavigationMenu onClick={this.toogle}></NavigationMenu>
                        </IconButton>
                    </ToolbarGroup>
                </Toolbar>
                <DrawerComponent isToogle={this.state.isToogle} toogle={this.toogle}></DrawerComponent>
                
            </div>
        )
    }
}

export default HostComponent;