import React from "react";
import * as Styles from "./Dropdown.module.css";

const Dropdown = props => {

    return (
        <div className={Styles.Dropdown}>
            <select
                onChange={(event) => props.onChangeHandler(event)}
            >
                {Object.keys(props.data).sort().map(data => (
                    <option
                        key={data}
                        value={data}
                    >
                        {data}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default Dropdown;