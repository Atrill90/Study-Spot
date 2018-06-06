import React,{ Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
class Map extends Component{

    constructor(){
        super()
        this.state = {
            map:null
        }
    }

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


    // componentDidMount(){
    // this.getLocation();
    // }

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
            <div>  
            <GoogleMap
              ref={this.mapLoaded.bind(this)}
              onDragEnd={this.mapMoved.bind(this)}
              onZoomChanged={this.zoomChanged.bind(this)}
              defaultZoom={this.props.zoom}
              defaultCenter={ this.props.center }>
              {markers.map((marker,index) => (
                    <Marker {...marker} />
              )
            )}
             
            </GoogleMap>
            </div>
        )
    }

}
// Google Map component doesn't stand on it's own. Need to render the higher order component from the export
export default withGoogleMap(Map);