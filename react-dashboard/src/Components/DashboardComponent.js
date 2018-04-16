import React, { Component, ReactDOM } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PaperComponent from "./PaperComponent";
import ImageCard from "./Cards/ImageCard";

const colStyle = {
    margin: '10px'
  };
class DashboardComponent extends Component {

    constructor(props) {
        super(props);
        var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation';
        this.state = { 
            components: [
             <ImageCard content={loremIpsum}/>,
             <ImageCard content={loremIpsum}/>,
             <ImageCard content={loremIpsum} />,
             <ImageCard content={loremIpsum} />,
             <ImageCard content={loremIpsum} />,
             <ImageCard content={loremIpsum} />,
             <ImageCard content={loremIpsum} />,
             <ImageCard content={loremIpsum} />,
             <ImageCard content={loremIpsum} />] }
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.components.map((element, index) =>
                        <Col md={3} style={colStyle}>
                            <PaperComponent key={index} component={element}/>
                        </Col>)
                    }
                </Row>
            </div>)
    }
}

export default DashboardComponent;