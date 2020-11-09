import React from 'react'

import { CitySelect } from '../CitySelect/CitySelect'
import { Temperature } from '../Temperature/Temperature'
import { Wind } from '../Wind/Wind'
import { MenuButton } from '../MenuButton/MenuButton'
import { ControlButtons } from '../ControlButtons/ControlButtons'
import { RangeSlider } from '../RangeSlider/RangeSlider'
import { Loader } from '../Loader/Loader'
import './popups.scss'
import './Layout.scss'

export function Layout() {
    return (
        <>
            <div className="app">
                {/*<Map/>*/}
                <div className="app__interface">
                    <CitySelect className="app__city-select" />
                    <Temperature className="app__temperature" />
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
