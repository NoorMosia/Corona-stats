import React, { Component } from "react";
import Axios from "axios";
import NumConverter from "../../HelperFunctions/NumConverter";
import * as Styles from "./OverallView.module.css";

import StatsCard from "../../components/StatsCard/StatsCard";
import Loader from "../../UI/Loader/Loader";

class OverallView extends Component {
    state = {
        cases: 0,
        deaths: 0,
        recovered: 0,
        loading: true
    }

    componentDidMount = () => {
        Axios.get("https://coronavirus-19-api.herokuapp.com/all")
            .then(response => {
                this.setState({
                    cases: response.data.cases,
                    recovered: response.data.recovered,
                    deaths: response.data.deaths,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                console.log(error);
            })
    }

    render() {
        return (
            <div className={Styles.OverallView}>
                {
                    !this.state.loading ?
                        <React.Fragment>
                            <StatsCard name="cases">{NumConverter(this.state.cases)}</StatsCard>
                            <StatsCard name="recovered">{NumConverter(this.state.recovered)}</StatsCard>
                            <StatsCard name="died">{NumConverter(this.state.deaths)}</StatsCard>
                        </React.Fragment> :
                        <Loader></Loader>
                }
            </div>
        )
    }
}

export default OverallView;