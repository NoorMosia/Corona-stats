import React, { Component } from "react";
import Axios from "axios"
import DataBuilder from "../../HelperFunctions/ZADataBuilder";
import * as Styles from "./ZAView.module.css";
import Loader from "../../UI/Loader/Loader";

import LineChart from "../../components/Chart/LineChart/LineChart";
// import PieChart from "../../components/Chart/PieChart/PieChart";
import OverallView from "../OverallView/OverallView";

class ZAView extends Component {
    state = {
        data: {
            provinces: [],
            ages: [],
            transmission_types: [],
            genders: []
        },
        total: 0,
        loading: true,
        error: false

    }

    componentDidMount = () => {
        Axios.get("https://cors-anywhere.herokuapp.com/https://covid-za-api.herokuapp.com/cases/confirmed")
            .then(response => {
                this.setState({
                    data: DataBuilder(response.data),
                    total: response.data.length,
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

    formatChartData = (data) => {
        let charData = {}
        const keys = Object.keys(data)
        const values = Object.values(data)

        for (let index = 0; index < keys.length; index++) {
            if (keys[index] === "minors") {
                keys[index] = "<18"
            } else if (keys[index] === "youngAdults") {
                keys[index] = "18 - 29"
            } else if (keys[index] === "adults") {
                keys[index] = "30 - 39"
            } else if (keys[index] === "adultsOver40") {
                keys[index] = "40 - 49"
            } else if (keys[index] === "adultsOver50") {
                keys[index] = "50 - 59"
            } else if (keys[index] === "seniors") {
                keys[index] = ">=60"
            } else if (keys[index] === "no_travel") {
                keys[index] = "no travel history"
            } else if (keys[index] === "visit") {
                keys[index] = "non-citizen"
            } else if (keys[index] === "travel") {
                keys[index] = "travelled"
            }
        }

        charData = {
            labels: keys,
            datasets: [{
                label: "number of people",
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 247, 0.6)',
                    'rgba(74, 34, 255, 0.6)',
                    'rgba(34, 167, 255, 0.6)',
                    'rgba(34, 255, 226, 0.6)'
                ]
            }]
        }

        return charData;
    }

    render() {

        return (
            <div className={Styles.ZAView}>
                {!this.state.loading ?
                    <React.Fragment>
                        <OverallView></OverallView>
                        <h2 className={Styles.Head}>SA after {this.state.total} cases</h2>

                        <LineChart
                            chartData={this.formatChartData(this.state.data.provinces)}
                            displayTitle="Provinces affected"
                        ></LineChart>

                        {/* <PieChart
                            total={this.state.total}
                            chartData={this.formatChartData(this.state.data.transmission_types)}
                            displayTitle="Travel history(close to diagnosis)"
                        ></PieChart>

                        <PieChart
                            total={this.state.total}
                            chartData={this.formatChartData(this.state.data.ages)}
                            displayTitle="ages"
                        ></PieChart>

                        <PieChart
                            total={this.state.total}
                            chartData={this.formatChartData(this.state.data.genders)}
                            displayTitle="genders"
                        ></PieChart> */}
                    </React.Fragment>
                    : <Loader></Loader>
                }
            </div>
        )
    }
}

export default ZAView;