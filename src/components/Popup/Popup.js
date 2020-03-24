import React from "react";
import * as Styles from "./Popup.module.css";

import NumConverter from "../../HelperFunctions/NumConverter";

const Popup = props => {
    return (
        <div className={Styles.Popup}>
            <div className={Styles.Country}>
                {props.data.country}<br />
                {props.data.province}
            </div>

            <div className={Styles.Data}>
                Confirmed: {NumConverter(props.data.latest.confirmed)}
            </div>
            <div className={Styles.Data}>
                Recovered: {NumConverter(props.data.latest.recovered)}
            </div>
            <div className={Styles.Data}>
                Death: {NumConverter(props.data.latest.deaths)}
            </div>
        </div>
    )
}

export default Popup;