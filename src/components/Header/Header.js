import React from "react";

import * as Styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={Styles.Header}>
            <span role="img" aria-label="hamburger">🦠</span>The Rona App
        </div>
    )
}

export default Header;