import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./Landing.css";
import Map from "../../components/Map";
import API from "../../utils/API";

class Landing extends Component {
     constructor (props) {
       super()
       this.state = {
         markers: []
       }
     }

     componentDidMount() {
        API.findAllSpots()
        .then(res => {
        let spotsArr =res.data;
        let spotsMap = spotsArr.map(spot => {
           return {
              id: spot._id,
              position: {lat: spot.lat, lng: spot.lng}
            }

          });
          console.log(spotsMap);
          this.setState({markers: spotsMap})

        })
     }

     onMarkerClick(){
       window.location.href ="/spots"
     }





  render(){
      return(
       <Container fluid>
          <Row>
            <Col size="md-12" id="jumbo-col">
              <Jumbotron>
                <h1 id ="webTitle">Study Spot</h1>
                <h3><i class="fas fa-book"></i>

                Find a great spot to study 
                <i class="fas fa-book"></i>
                </h3>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size= "md-12" id ="studyPic-col">
              <div id ="studyPic">
                
              </div>
           </Col>
         </Row>
          <Row id ="mapRow">
            <Col size="md-12" id = "mapColumn">
            
              <Map
              center={{lat: 28.602, lng: -81.200 }}
              zoom ={12}
              markers = {this.state.markers}
              //The next two props are required
              containerElement ={<div style ={{height:100+'%'}}/>}
              mapElement = {<div style ={{height:100+'%'}}/>}
              onMarkerClick = {this.onMarkerClick}

            />
            </Col>
         </Row>
        </Container>
    
    )  
  }  
}

      export default Landing;




