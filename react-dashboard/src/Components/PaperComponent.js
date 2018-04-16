import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class PaperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Paper zDepth={2}>
                {this.props.component}
            </Paper>
        </div> )
    }
}
 
export default PaperComponent;