import { BsEnvelopeFill } from 'react-icons/bs'
import styles from './CardOurTeamMembers.module.css'
import type { PropsCardOurTeamMembers } from '../../../Data/OurTeamMembers'

const CardOurTeamMembers = ({img , name , title ,desc} : PropsCardOurTeamMembers) => {

    return (
        <div className={styles.card}>
            <div className={styles.topCard}>
                <div className={styles.img_name}>
                    <div className={styles.divImg}>
                        <img className={styles.img} src={img} alt="" />
                    </div>
                    <h3 className={styles.name}>{name}</h3>
                </div>

                <div className={styles.divIcon}>
                    <BsEnvelopeFill />
                </div>
            </div>

            <div className={styles.container}>
                <p className={styles.title}>{title}</p>
                <span className={styles.desc}>{desc}</span>
            </div>
        
        </div>
    )
}

export default CardOurTeamMembers
