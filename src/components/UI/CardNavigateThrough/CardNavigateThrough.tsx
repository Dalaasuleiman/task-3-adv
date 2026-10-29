import { FiArrowRight } from 'react-icons/fi'
import styles from './CardNavigateThrough.module.css'
import Decoration from './Decoration/Decoration'
export interface propsCardNavigateThrough{
    title :string,
    desc : string
}
const CardNavigateThrough = ({title , desc}:propsCardNavigateThrough) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <Decoration />
            <p className={styles.desc}>{desc}</p>
            <button className={styles.btn}> Learn More <FiArrowRight className={styles.icon}/></button>
        </div>
    )
    }

export default CardNavigateThrough
