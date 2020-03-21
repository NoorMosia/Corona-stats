import React from "react";
import * as Styles from "./AboutView.module.css";

import AboutSection from "../../components/AboutSection/AboutSection";

const AboutView = () => {

    return (
        <div className={Styles.AboutView}>
            <AboutSection heading="creator">
                <a href="http://noormosia.com">Noor Tshepo Mosia</a>
            </AboutSection>
            <AboutSection heading="notes">
                Data used in this have been acquired from public APIs.<br />
                All data is subject to confirmation.<br />

            </AboutSection>
            <AboutSection heading="credits">
                Overall stats are from an API built by <a href="https://github.com/javieraviles/covidAPI">Javier Aviles</a>.<br /><br />

                Individual country stats are from an API built by <a href="https://github.com/ExpDev07/coronavirus-tracker-api">ExpDev07</a>. <br /><br />

                Daily data used in graph are from an API built by <a href="https://github.com/pomber/covid19">pomber</a>.
            </AboutSection>
        </div>
    )
}

export default AboutView;