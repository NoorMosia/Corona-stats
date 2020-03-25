import React, { Component } from "react";
import Axios from "axios"

import Map from "../../components/Map/Map";
import * as Styles from "./MapView.module.css";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";
import ErrorBoundary from "../../HelperFunctions/ErrorBoundary";

class MapView extends Component {
    state = {
        data: [],
        selectedLocation: null,
        loading: true,
        error: false
    }

    componentDidMount = async () => {
        Axios.get("https://cors-anywhere.herokuapp.com/https://coronavirus-tracker-api.herokuapp.com/v2/locations")
            .then(response => {
                this.setState({
                    data: response.data.locations,
                    loading: false,
                    error: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: true
                })
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
        const altComponent = this.state.error ? <Error /> : <Loader />

        return (
            <div className={Styles.MapView}>
                {
                    !this.state.loading ?
                        <ErrorBoundary>
                            <Map
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_API_KEY}`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                data={this.state.data}
                                clickHandler={(loc) => this.setSelectedLocation(loc)}
                                deselectHandler={this.unsetSelectedLocation}
                                selected={this.state.selectedLocation}
                            >
                            </Map>
                        </ErrorBoundary> :
                        altComponent
                }
            </div >
        )
    }
}

export default MapView;