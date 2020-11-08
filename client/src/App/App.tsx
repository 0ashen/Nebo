import React from 'react';
import './App.scss';
import './popups.scss';

import iconLogo from '../assets/img/general/logo.icon.svg';
import iconPlayMarket from '../assets/img/general/play-market.icon.svg';
import iconAppStore from '../assets/img/general/app-store.icon.svg';
import {Loader} from "./Loader/Loader";
import {CitySelect} from "./CitySelect/CitySelect";
import {Temperature} from "./Temperature/Temperature";
import {Wind} from "./Wind/Wind";
import {MenuButton} from "./MenuButton/MenuButton";
import {ControlButtons} from "./ControlButtons/ControlButtons";
import {RangeSlider} from "./RangeSlider/RangeSlider";


export function App() {
    return <>
        <div className="app">
            {/*<Map/>*/}
            <div className="app__interface">
                <CitySelect/>
                <Temperature/>
                <Wind/>
                <MenuButton/>
                <ControlButtons/>
                <img className="logo" src={iconLogo} alt=""/>
                <RangeSlider/>
                <ul className="markets">
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=nebo.krasnoyarsk.blacksky">
                            <img src={iconPlayMarket} alt="" width="28"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.apple.com/ru/app/nebo/id1271451328">
                            <img src={iconAppStore} alt="" width="28"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Loader/>
    </>
}

