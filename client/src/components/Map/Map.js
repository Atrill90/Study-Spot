import React,{ Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
class Map extends Component{

    render (){
        return(
            <div>  Map Component 
            <GoogleMap
              defaultZoom={3}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}>
              {props.markers.map((marker,index) => (
                    <Marker {...marker} />
              )
            )}
             
            </GoogleMap>
            </div>
        )
    }

}

export default withGoogleMap(Map);