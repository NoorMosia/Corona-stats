import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import * as Styles from "./PieChart.module.css";

// eslint-disable-next-line no-extend-native
const truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};

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
                                // parseFloat(number.toFixed(2))
                                return truncateDecimals(value / props.total * 100, 1) + "%";
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default PieChart;