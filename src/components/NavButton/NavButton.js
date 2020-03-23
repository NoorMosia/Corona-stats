import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { GoGraph } from 'react-icons/go';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaGlobeAfrica } from 'react-icons/fa'

import * as Styles from "./NavButton.module.css";

const NavButton = props => {
    let button;

    switch (props.children) {
        case "home":
            button = <MdHome />
            break;
        case "za":
            button = <FiMapPin />
            break;
        case "map":
            button = <FaGlobeAfrica />
            break;
        case "graph":
            button = <GoGraph />
            break;
        case "about":
            button = <FaUserAstronaut />
            break;
        default:
            break;
    }

    return (
        <NavLink
            to={"/" + props.children}
            className={Styles.NavButton}
            activeClassName={Styles.Active}
        >
            <div>
                {button}
            </div>
        </NavLink>
    )
}

export default NavButton;