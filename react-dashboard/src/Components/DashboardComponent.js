import React,{ Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PaperComponent from "./PaperComponent";
import ImageCard from "./Cards/ImageCard/ImageCard";
import { connect } from "react-redux";
import { addComponent } from "./../actions/index";
import './../App.css';

const rowStyle = {
    margin: '10px'
};
 
const cardStyle = {
      marginBottom: '8px'
};

const mapDispatchToProps = dispatch => {
    return {
      addComponent: component => dispatch(addComponent(component))
    };
  };

const mapStateToProps = state =>{
    console.log(state);
    return {components: state.components}
}

class Dashboard extends Component {

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
             <ImageCard content={loremIpsum} />] 
            }

             this.add = this.add.bind(this);
    }

    add(event){
        event.preventDefault();
        var component = <ImageCard content={"asd"}/>;
        this.props.addComponent(component);
        this.setState({components: [...this.state.components, component]});
    }

    render() {
        return(
            <div style={rowStyle}>
                <Row>
                    {this.state.components.map((element, index) =>
                        <Col md={4} style={cardStyle} key={index}>
                            <PaperComponent key={index} component={element}></PaperComponent>
                        </Col>)
                    }
                </Row>
                <button onClick={this.add}>Add Component</button>
                </div>);
    }
}

const DashboardComponent = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardComponent;