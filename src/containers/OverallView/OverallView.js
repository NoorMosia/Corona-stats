import React, { Component } from "react";
import Axios from "axios";
import NumConverter from "../../HelperFunctions/NumConverter";
import * as Styles from "./OverallView.module.css";

// import StatsCard from "../../components/StatsCard/StatsCard";
import SummaryCard from "../../components/Cards/SummaryCard/SummaryCard";
// import Loader from "../../UI/Loader/Loader";

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
        Axios.get("https://coronavirus-19-api.herokuapp.com/all")
            .then(response => {
                globalstats = response.data
                return Axios.get("https://coronavirus-19-api.herokuapp.com/countries/south")
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
                console.log(response)
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

                {/* <StatsCard name="cases">{NumConverter(this.state.cases)}</StatsCard>
                            <StatsCard name="recovered">{NumConverter(this.state.recovered)}</StatsCard>
                            <StatsCard name="deaths">{NumConverter(this.state.deaths)}</StatsCard> */}


            </div>
        )
    }
}

export default OverallView;