import React from 'react'
import './ControlButtons.scss'
import { IconLayers } from '../../assets/img/general/layers.icon'
import { IconRating } from '../../assets/img/general/rating.icon'
import { IconLang } from '../../assets/img/general/lang.icon'

export function ControlButtons() {
    return (
        <div className="mid">
            <ul className="buttons">
                <li>
                    <button data-open="tooltip">
                        <IconLayers />
                    </button>
                    <div className="tooltip">
                        <ul>
                            <li>
                                <p id="toggleLayer_sensors">Sensors</p>
                            </li>
                            <li>
                                <p id="toggleLayer_heatmap">
                                    Pollution heatmap
                                </p>
                            </li>
                            <li>
                                <p id="toggleLayer_sourcesOfPollution">
                                    Sources of pollution
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button data-open="ratingPollutionPopup">
                        <IconRating />
                    </button>
                </li>
                <li>
                    <button data-open="tooltip">
                        <IconLang />
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
                                <a className="is-selected" href="/ru">
                                    Russia
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
