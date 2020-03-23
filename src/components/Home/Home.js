import React from "react";
import * as Styles from "./Home.module.css";

import Accordion from "../Accordion/Accordion";

const Home = () => {
    return (
        <div className={Styles.Home}>
            <Accordion></Accordion>

            <div className={Styles.Cite}>
                information displayed on this page is from the official website
                of the World Health Organisation(WHO).<br />
                for more info on COVID-19 go to <a href="https://www.who.int/">www.who.int</a>
            </div>
        </div>
    )
}

export default Home;