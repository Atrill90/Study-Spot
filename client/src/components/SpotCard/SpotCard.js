import React,{ Component } from 'react';
import "./SpotCard.css";
import Map from "../Map/";


class SpotCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [],
            lat: 0,
            lng: 0,
            starsTotal: 5,
            overallRatingStars: 0,
            theRealFirstWord: ""
        }
    }

    componentDidMount() {
        let lat = this.props.lat;
        let lng = this.props.lng;
        let latLng = {lat: lat, lng: lng}
        let markerId = this.props._id; //probably works>?
        let markerPosition = latLng; //hope this works
        
        let markers = [
            {
                id: markerId,
                position: markerPosition
            }
        ]
        let str = this.props.locationName;
        let firstWord = str.split(' ')[0]
        let theRealFirstWord = firstWord.replace(/'/g, '')
        console.log(theRealFirstWord);
        let starPercentage = (this.props.overallRating / this.state.starsTotal) * 100;
        let starPercentageRounded = `${Math.round(starPercentage / 10) *10}%`;
        console.log(starPercentageRounded);
    
        this.setState({lat: lat, lng: lng, markers: markers,overallRatingStars: starPercentageRounded,theRealFirstWord:theRealFirstWord})

        // document.querySelector(`.${theRealFirstWord}.starsinner`).style.width = starPercentageRounded;
    }
        


    render() {
        return(
            <div className="col-12" key = {this.props.id}>   {/*fix this id*/}
                    <div className="card rounded-0">
                        <div className="card-body" id={this.props.locationName}>
                            <div className="row">
                                <div className="col-4">
                                    <img src={this.props.image} className="spot-img spotPic" alt={this.props.locationName}/>
                                </div>
                                <div className= "col-5 pl-0">
                                    <p className="spot-address">Address: {this.props.formattedAddress}</p>
                                    <p className="spot-name">Study Spot: {this.props.locationName}</p>
                                    <p className="spot-phone">Phone: {this.props.phone}</p>
                                    <p className="overall-rating">Study Spot Rating: {this.props.overallRating}</p>  
                                    <div className = "stars-outer">
                                        <div className = {`${this.state.theRealFirstWord} starsinner`}></div>
                                    </div>
                                    <br/>    
                                    <br/>                                
                                     <a data-toggle="collapse" href={`#${this.props._id}`} role="button" aria-expanded="false" aria-controls={this.props._id}>
                                    Rating Breakdown
                                    </a>
                                    <div className="collapse" id={this.props._id}>
                                        <p className="outlet-rating">Outlet Rating: {this.props.outletRating}</p>
                                        <p className="noise-rating">Noise Rating: {this.props.noiseRating}</p>
                                        <p className="wifi-rating">Wifi Rating: {this.props.wifiRating}</p>
                                        <p className="fd-rating">Food and Drink Rating: {this.props.fDRating}</p>
                                        <p className="seating-rating">Seating Rating: {this.props.seatingRating}</p>
                                        <p className="yelp-rating">Yelp Rating: {this.props.yelpRating}</p>
                                    </div>
                                    
                                </div>
                                <div className="col-3 pl-0">
                                    <Map
                                    containerElement ={<div style ={{height:100+'%'}}/>}
                                    mapElement = {<div style ={{height:100+'%'}}/>}
                                    center = {{lat: this.state.lat, lng: this.state.lng }}
                                    zoom ={15}
                                    // lat = {this.props.lat}
                                    markers = {this.state.markers}
                                    />
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
        )
    }
}
/*
const SpotCard = ({id, locationName, image, formattedAddress, outletRating, noiseRating,wifiRating, fDRating, seatingRating, lat, lng, yelpRating, overallRating, phone,_id}) => (
        <div className="col-12" key = {id}>  
        <div className="card rounded-0">
            <div className="card-body" id={locationName}>
                 <div className="row">
                    <div className="col-4">
                        <img src={image} className="spot-img spotPic" alt={locationName}/>
                    </div>
                    <div className="col-5 pl-0">
                        <p className="spot-address">Address: {formattedAddress}</p>
                        <p className="spot-name">Study Spot: {locationName}</p>
                        <p className="spot-phone">Phone: {phone}</p>
                        <p className="overall-rating">Study Spot Rating: {overallRating}</p>
                        <a data-toggle="collapse" href={`#${_id}`} role="button" aria-expanded="false" aria-controls={_id}>
                        See More
                        </a>
                        <div className="collapse" id={_id}>
                            <p className="outlet-rating">Outlet Rating: {outletRating}</p>
                            <p className="noise-rating">Noise Rating: {noiseRating}</p>
                            <p className="wifi-rating">Wifi Rating: {wifiRating}</p>
                            <p className="fd-rating">Food and Drink Rating: {fDRating}</p>
                            <p className="seating-rating">Seating Rating: {seatingRating}</p>
                            <p className="yelp-rating">Yelp Rating: {yelpRating}</p>
                        </div>
                        
                    </div>
                    <div className="col-3 pl-0">
                        <Map
                        containerElement ={<div style ={{height:100+'%'}}/>}
                        mapElement = {<div style ={{height:100+'%'}}/>}
                        center = {{lat: lat, lng: lng }}
                        zoom ={15}
                        lat = {lat}
                        markers = [
                            }
                        ]
                        />
                    </div>
                </div>
            </div>	
        </div>
    </div>
)
*/
    export default SpotCard;