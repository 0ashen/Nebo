import React from "react";
import './CitySelect.scss'
import iconLoup from "../../assets/img/general/loup.icon.svg";

export function CitySelect(props: any) {
    console.log(props)
    return (
        <div className="city-select">
            <div className="selected">
                <span>Krasnoyarsk </span>
            </div>
            <div className="places">
                <div className="search">
                    <input type="text" placeholder="Enter fiil city name"/>
                    <img src={iconLoup} alt=""/>
                </div>
                <div className="body">
                    <div className="empty">
                        <p>There are no Nebo sensors in your city yet</p>
                        {/*eslint-disable-next-line*/}
                        <a href="#">I want to install Nebo</a>
                    </div>
                    <div className="item" data-value="almaty">
                        <p>Almaty</p>
                        <small>Kazakhstan</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
