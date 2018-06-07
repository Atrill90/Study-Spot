import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";


class Spots extends Component {
    constructor (props) {
        super()
        this.state = {
            spots:[],
            query: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
     }

     formSubmission = event => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        console.log("form submission works");
        this.setState({[name]:value});
        this.userCreate();
     }

    render() {
        return(
            <Container fluid>
            <Row>
                <Col size= "md-4" > </Col>    
                <Col size= "md-4" >
                    <h1> Search goes here </h1>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search a Spot"        aria-label="Recipient's username"     aria-describedby="basic-addon2"/>
                    </div>
                    <button type="button" class="btn btn-secondary">Submit</button>     
               </Col>  
            </Row>
            <br/>
            <Row>
            </Row>        
        </Container>
        )
    }
}

export default Spots;