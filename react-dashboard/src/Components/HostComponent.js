import React, { Component } from 'react';
//Material
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
//Components
import DrawerComponent from './DrawerComponent';
import DashboardComponent from "./DashboardComponent";
import AboutComponent from "./AboutComponent";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToogle: false,
            selectedPage: null
        };

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
            <Router>
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
                    <DrawerComponent 
                        isToogle={this.state.isToogle}
                        toogle={this.toogle}>
                    </DrawerComponent>

                    <Route exact path="/" component={DashboardComponent} />
                    <Route path="/about" component={AboutComponent} />

                </div>
            </Router>
        )
    }
}

export default HostComponent;