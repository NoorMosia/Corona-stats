import React, { Component } from "react";
import Axios from "axios"

import Map from "../../components/Map/Map";
import * as Styles from "./MapView.module.css";
import Loader from "../../UI/Loader/Loader";

class MapView extends Component {
    state = {
        data: [],
        selectedLocation: null,
        loading: true
    }

    componentDidMount = async () => {
        Axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
            .then(response => {
                this.setState({
                    data: response.data.locations,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                console.log(error)
            })
    }

    setSelectedLocation = (currentLoc) => {
        this.setState({
            ...this.state,
            selectedLocation: currentLoc
        })
    }

    unsetSelectedLocation = () => {
        this.setState({
            ...this.state,
            selectedLocation: null
        })
    }

    render() {
        console.log(this.state.selectedLocation)
        return (
            <div className={Styles.MapView}>
                {
                    !this.state.loading ? <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_API_KEY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        data={this.state.data.slice(0, 100)}
                        clickHandler={(loc) => this.setSelectedLocation(loc)}
                        deselectHandler={this.unsetSelectedLocation}
                        selected={this.state.selectedLocation}

                    >
                    </Map> :
                        <Loader></Loader>
                }

            </div >
        )
    }
}

export default MapView;