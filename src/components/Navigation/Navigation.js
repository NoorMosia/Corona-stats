import React from "react";
import * as Styles from "./Navigation.module.css";

import NavButton from "../NavButton/NavButton";

const Navigation = () => {
    return (
        <div className={Styles.Navigation}>
            <NavButton>home</NavButton>
            <NavButton>za</NavButton>
            <NavButton>map</NavButton>
            <NavButton>graph</NavButton>
            <NavButton>about</NavButton>
        </div>
    )
}

export default Navigation;