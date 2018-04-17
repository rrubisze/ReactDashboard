import React, { Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PaperComponent from "./PaperComponent";
import ImageCard from "./Cards/ImageCard";
import './../App.css';

 const rowStyle = {
    margin: '10px'
  };
 
  const cardStyle = {
      marginBottom: '8px'
  }
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
            <div style={rowStyle}>
                <Row>
                    {this.state.components.map((element, index) =>
                        <Col md={4} style={cardStyle} key={index}>
                            <PaperComponent key={index} component={element}/>
                        </Col>)
                    }
                </Row>
            </div>)
    }
}

export default DashboardComponent;