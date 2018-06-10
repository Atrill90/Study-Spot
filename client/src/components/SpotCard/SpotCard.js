import React,{ Component } from 'react';
import "./SpotCard.css";
import Map from "../Map/";

const SpotCard = ({id, locationName, image, formattedAddress, outletRating, noiseRating,wifiRating, fDRating, seatingRating, lat, lng}) => (
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
                        <p className="spot-details">Let's check the ratings!</p>
                        <p className="outlet-rating">Outlet Rating: {outletRating}</p>
                        <p className="noise-rating">Noise Rating: {noiseRating}</p>
                        <p className="wifi-rating">Wifi Rating: {wifiRating}</p>
                        <p className="fd-rating">Food and Drink Rating: {fDRating}</p>
                        <p className="seating-rating">Seating Rating: {seatingRating}</p>
                    </div>
                    <div className="col-3 pl-0">
                        <Map
                        containerElement ={<div style ={{height:100+'%'}}/>}
                        mapElement = {<div style ={{height:100+'%'}}/>}
                        center = {{lat: lat, lng: lng }}
                        zoom ={15}
                        lat = {lat}
                        />
                    </div>
                </div>
            </div>	
        </div>
    </div>
)
    export default SpotCard;