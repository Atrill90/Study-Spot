import React,{ Component } from 'react'
import {withGoogleMap, GoogleMap, Marker,} from 'react-google-maps'


class Map extends Component{

    constructor(props){
        super(props)
            this.state = {
            map:null,
            lat :"",
            lng: "",
            positionState: "", 
            marker:[]


        }
    }
    getLocation = event => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
         }   else { 
            console.log("Geolocation is not supported by this browser.");
         }
    };

    showPosition = position => {
        this.setState( prevState => ({
            positionState: {
                ...prevState.positionState,
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        }))
        // console.log(`${this.state.lat} ${this.state.lng}`);
        console.log(this.state.positionState);
        
    };

    mapMoved (){
        console.log('Map Moved' +JSON.stringify(this.state.map.getCenter()));
    }

    zoomChanged(){
        console.log('Zoom Changed'+ this.state.map.getZoom());
    }

    mapLoaded(map){
        // console.log('mapLoaded: '+JSON.stringify(map.getCenter()))
        if (this.state.map !=null)
            return

        this.setState({
            map:map
        })
    }
    // mapMarker(coords,){
    //     let marker = new google.maps.Marker({
    //         position:coords,
    //         map:map,

    //     })
    // }


    componentDidMount(){
        this.getLocation();
        // let spotLat = this.props.lat
        // let spotLng = this.props.lng

        // const markers = [{
        //     location:{
        //         lat:spotLat,
        //         lng:spotLng
        //     }
        // }]
        // this.marker = new google.maps.Marker({
        //     map: this.map,
        //     position: {
        //      markers
        //     }      
        //  })
    }

//     getLocation = callback =>{
//     fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyApLeLjAqhg5nXoDlvzxKzmdv78-Qqh3F8`)
//     .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });
// }

    render (){
        const markers = this.props.markers || []
        return(
            <GoogleMap
              ref={this.mapLoaded.bind(this)}
              onDragEnd={this.mapMoved.bind(this)}
              onZoomChanged={this.zoomChanged.bind(this)}
              defaultZoom={this.props.zoom}
              defaultCenter={this.props.center}
            >
            {markers.map((marker, index) => ( 
                <Marker 
                    key={index}
                    position={marker.position}
                    onClick={() => this.props.onMarkerClick(marker)}    
                />
            ))}
            </GoogleMap>
        )
    }

}
// Google Map component doesn't stand on it's own. Need to render the higher order component from the export
export default withGoogleMap(Map);