import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from './../../logo.svg';
const containerStyle={
    padding: '5px'
}

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div style={containerStyle}>
            <Row>
                <Col md={2}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Col>
                <Col md={10}>
                    {this.props.content}
                </Col>
                
            </Row>
            
        </div> 
        )
    }
}
 
export default ImageCard;