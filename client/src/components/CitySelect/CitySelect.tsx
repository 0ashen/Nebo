import React from 'react'
import styles from './CitySelect.module.scss'
import iconLoup from '../../assets/img/general/loup.icon.svg'
import { IComponent } from '../IComponent'

interface Props extends IComponent {}

export function CitySelect(props: Props) {
    return (
        <div className={styles.city_select + ' ' + props.className}>
            <div className="city_select__selected">
                <span>Krasnoyarsk </span>
            </div>
            <div className="city_select__places">
                <div className="city_select__search">
                    <input type="text" placeholder="Enter fiil city name" />
                    <img src={iconLoup} alt="" />
                </div>
                <div className="city_select__body">
                    <div className="city_select__item-empty">
                        <p>There are no Nebo sensors in your city yet</p>
                        {/*eslint-disable-next-line*/}
                        <a href="#">I want to install Nebo</a>
                    </div>
                    <div className="city_select__item" data-value="almaty">
                        <p>Almaty</p>
                        <small>Kazakhstan</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
