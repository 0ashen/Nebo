import React from "react";
import './Wind.scss'
import iconWindDirection from "../../assets/img/general/wind-direction.icon.svg";

export function Wind() {
    return (
        <div className="wind">
            <img src={iconWindDirection} alt="" id="wind-direction"/>
            <span>7</span>
        </div>
    )
}
