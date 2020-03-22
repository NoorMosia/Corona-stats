import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import * as Styles from "./PieChart.module.css";

const PieChart = props => {

    return (
        <div className={Styles.PieChart}>
            <Pie
                displayLegend={true}
                legendPosition='right'
                location='City'
                data={props.chartData}
                options={{
                    title: {
                        display: true,
                        text: props.displayTitle,
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    plugins: {
                        datalabels: {
                            clip: true,
                            display: true,
                            color: 'black',
                            formatter: function (value, context) {
                                return Math.round(value / props.total * 1000) / 10 + "%";
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default PieChart;