import styles from './Decoration.module.css'

const Decoration = () => {
    return (
        <div className={styles.decoration}>

            <div className={`${styles.point} ${styles.point_Left}`}></div>
            <div className={styles.piece}></div>
            <div className={styles.piece}></div>
            <div className={styles.piece}></div>
            <div className={styles.piece}></div>
            <div className={styles.piece}></div>
            <div className={styles.piece}></div>
            <div className={`${styles.point} ${styles.point_Right}`}></div>
        
        </div>
    )
    }

export default Decoration
