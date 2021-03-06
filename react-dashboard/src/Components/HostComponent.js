import React, { Component } from 'react';
//Material
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

//Components
import DrawerComponent from './DrawerComponent';
import DashboardComponent from "./DashboardComponent";
import TabComponent from "./TabComponent";
import AboutComponent from "./AboutComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";

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
                            <ToolbarTitle text="ABB"></ToolbarTitle>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <IconButton>
                                <ActionHome />
                            </IconButton>
                            <IconButton>
                                <SocialPerson />
                            </IconButton>
                            <IconButton>
                                <ActionSettings />
                            </IconButton>
                            <IconButton onClick={this.toogle}>
                                <NavigationMenu></NavigationMenu>
                            </IconButton>
                        </ToolbarGroup>
                    </Toolbar>
                    <DrawerComponent 
                        isToogle={this.state.isToogle}
                        toogle={this.toogle}>
                    </DrawerComponent>

                    <Route exact path="/" component={TabComponent} />
                    <Route path="/about" component={AboutComponent} />

                </div>
            </Router>
        )
    }
}

export default HostComponent;