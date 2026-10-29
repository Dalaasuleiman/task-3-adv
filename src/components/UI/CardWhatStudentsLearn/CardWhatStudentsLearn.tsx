import type { PropsCardWhatStudentsLearn } from '../../../Data/WhatStudentsLearnData'
import styles from './CardWhatStudentsLearn.module.css'

const CardWhatStudentsLearn = ({img , title , desc} : PropsCardWhatStudentsLearn) => {
    return (
        <div className={styles.card}>
            <div className={styles.divImg}>
                <img className={styles.img} src={img} alt="photo Students Learn" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
        
        </div>
    )
    }

export default CardWhatStudentsLearn
