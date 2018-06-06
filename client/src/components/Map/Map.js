import React,{ Component } from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
class Map extends Component{

    render (){
        const markers = this.props.markers || []
        return(
            <div>  Map Component 
            <GoogleMap
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