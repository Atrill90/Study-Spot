import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./Landing.css";
import Map from "../../components/Map";
const Landing = () => (
     
      
       <Container fluid>
          <Row>
            {/* <Col size="md-4" id="map-col">
           
            </Col> */}
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
          <Row>
            <Col size="md-12">
              <div className ="text-center">
                <h2> Sick of stuyding at home? Check out the spots page for a new place to hit the books! </h2>
              </div>  
              <Map
              center={{lat: 28.602, lng: -81.200 }}
              zoom ={15}
              //The next two props are required
              containerElement ={<div style ={{height:100+'%'}}/>}
              mapElement = {<div style ={{height:100+'%'}}/>}
            />

            </Col>
         </Row>
        </Container>
       
      );

      export default Landing;




