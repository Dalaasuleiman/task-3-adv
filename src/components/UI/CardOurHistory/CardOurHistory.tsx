import type { PropsCardOurHistory } from '../../../Data/OurHistoryData'
import  styles from './CardOurHistory.module.css'

const CardOurHistory = ({year , title , desc} : PropsCardOurHistory) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.line_point}>
                    <div className={`${styles.point} ${styles.point_Left}`}></div>
                    <div className={styles.piece}></div>
                    <div className={`${styles.point} ${styles.point_Right}`}></div>
                </div>

                    <div className={styles.container1}>
                        <img  className={styles.img} src="/assets/Abstract.png" alt="img" />
                        <h3 className={styles.year}>{year}</h3>
                    </div>
                </div>

                <div className={styles.container2}>
                    <p className={styles.title}>{title}</p>
                    <span className={styles.desc}>{desc}</span>
                </div>
            
        </div>
    )
}

export default CardOurHistory
