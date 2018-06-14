import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./Spots.css";
import SpotCard from "../../components/SpotCard";

class Spots extends Component {
    constructor (props) {
        super()
        this.state = {
            spots:[],
            query: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        API.findAllSpots()
        .then(res => {
            console.log(res);
            this.setState({
                spots:res.data
            })
        })
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
                    <h1 className="text-center mt-4"> Find your spot </h1>
               </Col>  
            </Row>
            <br/>
            <Row>
                {this.state.spots.map(spot =>{
                    return <SpotCard
                        id ={ spot.id}
                        _id = {spot._id}
                        key = {spot._id}
                        formattedAddress = {spot.formattedAddress}
                        locationName ={spot.locationName}
                        image = {spot.image}
                        outletRating = {spot.outletRating}
                        noiseRating = {spot.noiseRating}
                        wifiRating= {spot.wifiRating}
                        fDRating ={spot.fDRating}
                        seatingRating = {spot.seatingRating}
                        lat = {spot.lat}
                        lng = {spot.lng}
                        yelpRating = {spot.yelpRating}
                        overallRating = {spot.overallRating}
                        phone = {spot.phone}/>
                })}
            </Row>        
        </Container>
        )
    }
}

export default Spots;


{/* <div className="card">
                                    <img className="card-img-top spotPic" src={spot.image} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{spot.locationName}</h5>
                                        <p className="card-text">Wifi Rating {spot.wifiRating}</p>
                                        <a href="#" className="btn btn-primary">Give me the deets!</a>
                                    </div>
                                </div>
                            </div> */}