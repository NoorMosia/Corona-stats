import React from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";

import Popup from "../Popup/Popup";

const Map = props => {
    const markers = props.data.map(marker => {
        return (
            <Marker
                key={marker.id}
                position={{
                    lat: parseFloat(marker.coordinates.latitude),
                    lng: parseFloat(marker.coordinates.longitude)
                }}
                onClick={() => props.clickHandler(marker)}
                icon={{
                    url: "/corona.ico",
                    scaledSize: new window.google.maps.Size(25, 25)
                }}
            />

        )
    })

    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: -30.559483, lng: 22.937506 }}
        >
            {markers}
            {props.selected && (
                <InfoWindow
                    position={{
                        lat: parseFloat(props.selected.coordinates.latitude),
                        lng: parseFloat(props.selected.coordinates.longitude)
                    }}

                    onCloseClick={props.deselectHandler}>
                    <Popup data={props.selected}></Popup>
                </InfoWindow>
            )
            }
        </GoogleMap >
    )
}

export default withScriptjs(withGoogleMap(Map));