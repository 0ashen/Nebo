import React from 'react'
import './App.scss'
import './popups.scss'

import { Loader } from './childrens/Loader/Loader'
import { CitySelect } from './childrens/CitySelect/CitySelect'
import { Temperature } from './childrens/Temperature/Temperature'
import { Wind } from './childrens/Wind/Wind'
import { MenuButton } from './childrens/MenuButton/MenuButton'
import { ControlButtons } from './childrens/ControlButtons/ControlButtons'
import { RangeSlider } from './childrens/RangeSlider/RangeSlider'

export function App() {
    return (
        <>
            <div className="app">
                {/*<Map/>*/}
                <div className="app__interface">
                    <CitySelect class={'app__city-select'} />
                    <Temperature />
                    <Wind />
                    <MenuButton />
                    <ControlButtons />
                    <img
                        className="logo"
                        src={require('assets/img/general/logo.icon.svg')}
                        alt=""
                    />
                    <RangeSlider />
                    <ul className="markets">
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=nebo.krasnoyarsk.blacksky">
                                <img
                                    src={
                                        require('assets/img/general/play-market.icon.svg')
                                            .default
                                    }
                                    alt=""
                                    width="28"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://apps.apple.com/ru/app/nebo/id1271451328">
                                <img
                                    src={
                                        require('assets/img/general/app-store.icon.svg')
                                            .default
                                    }
                                    alt=""
                                    width="28"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader />
        </>
    )
}
