import React, { Component } from "react";
import * as Styles from "./GraphView.module.css";
import Dropdown from "../../components/Dropdown/Dropdown";

import Chart from "../../components/Chart/Chart";
import Loader from "../../UI/Loader/Loader";
import Error from "../../UI/Error/Error";

class GraphView extends Component {
    state = {
        data: {},
        filteredData: [],
        loading: false,
        error: false
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            loading: true
        })
        fetch("https://cors-anywhere.herokuapp.com/https://pomber.github.io/covid19/timeseries.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    ...this.state,
                    data: data,
                    loading: false,
                    error: false
                })

                return data;
            })
            .then(data => {
                this.filterData("Afghanistan")
            })
            .catch(err => {
                this.setState({
                    ...this.state,
                    loading: false,
                    error: true
                })
            })
    }

    filterData = country => {
        let dataset = this.state.data[country] ? this.state.data[country] : [];
        const confirmed = [];
        const deaths = [];
        const recovered = [];

        dataset = dataset.slice(dataset.length - 16,)

        const newDataset = []

        for (let index = 0; index < dataset.length; index++) {
            confirmed.push({
                "x": index,
                "y": dataset[index]["confirmed"]
            })
            deaths.push({
                "x": index,
                "y": dataset[index]["deaths"]
            })
            recovered.push({
                "x": index,
                "y": dataset[index]["recovered"]
            })
        }

        newDataset.push({
            "id": "confirmed",
            "color": "hsl(120, 70%, 50%)",
            "data": confirmed
        })

        newDataset.push({
            "id": "deaths",
            "color": "hsl(90, 70%, 50%)",
            "data": deaths
        })

        // newDataset.push({
        //     "id": "recovered",
        //     "color": "hsl(97, 46%, 28%)",
        //     "data": recovered
        // })

        this.setState({
            ...this.state,
            filteredData: newDataset
        })

    }

    onChangeHandler = async (event) => {
        this.filterData(event.target.value);
    }

    render() {
        let altComponent = this.state.error ? <Error /> : <Loader />

        return (
            <div className={Styles.GraphView}>
                {
                    !this.state.loading && !this.state.error ?
                        <React.Fragment>
                            <Dropdown
                                data={this.state.data}
                                onChangeHandler={(event) => this.onChangeHandler(event)}
                                selected={this.state.selected} />
                            <div className={Styles.Text}>Last 15 days</div>
                            <Chart data={this.state.filteredData} />
                        </React.Fragment> :
                        altComponent
                }
            </div>
        )
    }
}

export default GraphView;