import React from "react";

import * as Styles from "./StatsCard.module.css";

const StatsCard = props => {
    return (
        <div className={Styles.StatsCard}>
            <div className={Styles[`${props.name}`]}>{props.name} : {props.children}</div>
        </div>
    )
}

export default StatsCard;