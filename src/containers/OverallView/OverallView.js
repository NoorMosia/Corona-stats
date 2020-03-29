import React, { Component } from "react";
import Axios from "axios";
import NumConverter from "../../HelperFunctions/NumConverter";
import * as Styles from "./OverallView.module.css";

import SummaryCard from "../../components/Cards/SummaryCard/SummaryCard";

class OverallView extends Component {
    state = {
        cases: 0,
        deaths: 0,
        recovered: 0,
        southaCases: 0,
        southARecovered: 0,
        southADeaths: 0,
        loading: true
    }

    componentDidMount = () => {
        let globalstats;
        Axios.get("https://cors-anywhere.herokuapp.com/https://coronavirus-19-api.herokuapp.com/all")
            .then(response => {
                globalstats = response.data
                return Axios.get("https://cors-anywhere.herokuapp.com/https://coronavirus-19-api.herokuapp.com/countries/south africa")
            })
            .then(response => {

                this.setState({
                    cases: globalstats.cases,
                    recovered: globalstats.recovered,
                    deaths: globalstats.deaths,
                    southaCases: response.data.cases,
                    southARecovered: response.data.recovered,
                    southADeaths: response.data.deaths
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })

    }

    render() {
        return (
            <div className={Styles.OverallView}>
                <SummaryCard
                    heading="global"
                    cases={NumConverter(this.state.cases)}
                    recovered={NumConverter(this.state.recovered)}
                    deaths={NumConverter(this.state.deaths)}
                ></SummaryCard>
                <SummaryCard heading="south africa"
                    cases={NumConverter(this.state.southaCases)}
                    recovered={NumConverter(this.state.southARecovered)}
                    deaths={NumConverter(this.state.southADeaths)}
                ></SummaryCard>

            </div>
        )
    }
}

export default OverallView;