import React from 'react'
import styles from './Temperature.module.scss'
import { IComponent } from '../IComponent'

interface Props extends IComponent {}

export function Temperature(props: Props) {
    return <div className={styles.temperature + props.className}>9°C</div>
}
