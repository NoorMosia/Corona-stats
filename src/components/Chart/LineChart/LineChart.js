import React from 'react';
import { Bar } from 'react-chartjs-2';
import * as Styles from "./LineChart.module.css";

const LineChart = props => {
    return (
        <div className={Styles.LineChart}>
            <Bar
                data={props.chartData}
                options={{
                    title: {
                        display: true,
                        text: props.displayTitle,
                        fontSize: 25
                    },
                    legend: {
                        display: props.displayLegend,
                        position: props.legendPosition
                    },
                    plugins: {
                        datalabels: {
                            display: true,
                            color: 'black'
                        }
                    }
                }}
            />
        </div>
    )
}

export default LineChart;