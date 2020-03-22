import React, { Component } from "react";
import Axios from "axios"
import DataBuilder from "../../HelperFunctions/ZADataBuilder";
import * as Styles from "./ZAView.module.css";
import Loader from "../../UI/Loader/Loader";

import LineChart from "../../components/Chart/LineChart/LineChart";
import PieChart from "../../components/Chart/PieChart/PieChart";

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
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        }

        return charData;

    }



    render() {
        console.log(this.state.data)
        return (
            <div className={Styles.ZAView}>
                {!this.state.loading ?
                    <React.Fragment>
                        <LineChart
                            chartData={this.formatChartData(this.state.data.provinces)}
                            displayTitle="Provinces affected"
                        ></LineChart>
                        <PieChart
                            total={this.state.total}
                            chartData={this.formatChartData(this.state.data.transmission_types)}
                            displayTitle="Transmission types"
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
                        ></PieChart>
                    </React.Fragment>
                    : <Loader></Loader>
                }
            </div>
        )
    }
}

export default ZAView;