import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
//import logo from './../../logo.svg';
import NavigationFullscreen from 'material-ui/svg-icons/navigation/fullscreen';
import IconButton from 'material-ui/IconButton';
import './../cards.css';

const containerStyle={
    padding: '5px',
    position: 'relative'

}

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isExpanded: false
         }
    }

    expand(e){

    }

    render() { 
        return ( 
        <div style={containerStyle}>
            <Row>
                <Col md={10}>
                    {this.props.content}
                </Col>
                <Col md={2}>
                    <IconButton onClick={this.toogle} className="ribbon">
                        <NavigationFullscreen/>
                    </IconButton>
                </Col>                
            </Row> 
        </div> 
        )
    }
}
 
export default ImageCard;