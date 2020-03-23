import React from "react";
import * as Styles from "./SummaryCard.module.css";

const SummaryCard = props => {

    return (
        <div className={Styles.SummaryCard}>
            <div className={Styles.Head}>{props.heading}</div>
            <div className={Styles.Body}>
                <div className={Styles.Cases}>Cases<br />{props.cases}</div>
                <div className={Styles.Recovered}>Recoveries<br />{props.recovered}</div>
                <div className={Styles.Deaths}>Deaths<br />{props.deaths}</div>
            </div>
        </div>
    )
}


export default SummaryCard;