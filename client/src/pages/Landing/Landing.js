import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./Landing.css";
import studying from "../../img/studying.jpg";
const Landing = () => (
      <div>
      
       <Container fluid>
          <Row>
            <Col size="md-4">
              <h4> Map goes here </h4>
            </Col>
            <Col size="md-8">
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
            <Col size= "md-12">
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




