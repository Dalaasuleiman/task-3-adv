import type { PropsCardOurMissionVisions } from '../../../Data/OurMission&VisionsData'
import styles from './CardOurMission&Visions.module.css'

const CardOurMissionVisions = ({title, img ,desc} : PropsCardOurMissionVisions) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <img className={styles.img} src={img} alt="" />
            </div>
            <p className={styles.desc}>{desc}</p>
            
        </div>
    )
    }

export default CardOurMissionVisions
