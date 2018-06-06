import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./Landing.css";
import studying from "../../img/studying.jpg";
import Map from "../../components/Map";
const Landing = () => (
      <div>
      
       <Container fluid>
          <Row>
            <Col size="md-4" id="map-col">
            <Map
            center={{lat: 28.602, lng: -81.200 }}
            zoom ={15}
            //The next two props are required
            containerElement ={<div style ={{height:100+'%'}}/>}
            mapElement = {<div style ={{height:100+'%'}}/>}
            />
            </Col>
            <Col size="md-8" id="jumbo-col">
              <Jumbotron>
                <h1>Study Spot</h1>
                <h3>
                  <span role="img" aria-label="World Emoji">
                  🌎Find your spot to get shit done🌎
                  </span>
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
          <Row>
            <Col size="md-12">
              <div className ="text-center">
                <h2> Sick of stuyding at home? Check out the spots page for a new place to hit the books! </h2>
              </div>  
            </Col>
         </Row>
        </Container>
        </div>
      );

      export default Landing;




