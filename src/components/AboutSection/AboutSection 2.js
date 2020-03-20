import React from "react";
import * as Styles from "./AboutSection.module.css";

const AboutSection = props => {
    return (
        <div className={Styles.AboutSection}>
            <div className={Styles.Heading}>{props.heading}</div>
            <div className={Styles.Text}>{props.children}</div>
        </div>
    )
}

export default AboutSection;