import React from 'react';
import './App.scss';
import loup from '../assets/img/general/loup.svg';
import windDirection from '../assets/img/general/wind-direction.svg';
import logo from '../assets/img/general/logo.svg';
import playMarket from '../assets/img/general/play-market.svg';
import appStore from '../assets/img/general/app-store.svg';
import {IconLayers} from '../assets/img/general/layers.icon';
import {IconRating} from '../assets/img/general/rating.icon';
import {IconLang} from '../assets/img/general/lang.icon';
import {Loader} from "./Loader/Loader";

export function App() {
    return <>
        <div className="app">
            {/*<Map/>*/}
            <div className="app__interface">
                <div className="top">
                    <div className="select-subject">
                        <div className="selected">
                            <span>Krasnoyarsk </span>
                        </div>
                        <div className="places">
                            <div className="search">
                                <input type="text" placeholder="Enter fiil city name"/>
                                <img src={loup} alt=""/>
                            </div>
                            <div className="body">
                                <div className="empty">
                                    <p>There are no Nebo sensors in your city yet</p>
                                    <a href="#">I want to install Nebo</a>
                                </div>
                                <div className="item" data-value="almaty">
                                    <p>Almaty</p>
                                    <small>Kazakhstan</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="temperature">9°C</div>
                    <div className="wind">
                        <img src={windDirection} alt="" id="wind-direction"/>
                        <span>7</span>
                    </div>
                    <button className="menu-button" data-open="menuPopup">
                        <span></span>
                    </button>
                </div>
                <div className="mid">
                    <ul className="buttons">
                        <li>
                            <button data-open="tooltip">
                                <IconLayers/>
                            </button>
                            <div className="tooltip">
                                <ul>
                                    <li>
                                        <p id="toggleLayer_sensors">Sensors</p>
                                    </li>
                                    <li>
                                        <p id="toggleLayer_heatmap">Pollution heatmap</p>
                                    </li>
                                    <li>
                                        <p id="toggleLayer_sourcesOfPollution">Sources of pollution</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button data-open="ratingPollutionPopup">
                                <IconRating/>
                            </button>
                        </li>
                        <li>
                            <button data-open="tooltip">
                                <IconLang/>
                            </button>
                            <div className="tooltip">
                                <ul>
                                    <li>
                                        <p>Choose your language</p>
                                    </li>
                                    <li>
                                        <a href="/en">English</a>
                                    </li>
                                    <li>
                                        <a className="is-selected" href="/ru">Russia</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bot">
                    <img className="logo" src={logo} alt=""/>
                    <button className="play-button is-stop"></button>
                    <div className="history-slider"></div>
                    <ul className="markets">
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=nebo.krasnoyarsk.blacksky">
                                <img src={playMarket} alt="" width="28"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://apps.apple.com/ru/app/nebo/id1271451328">
                                <img src={appStore} alt="" width="28"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Loader/>
    </>
}

