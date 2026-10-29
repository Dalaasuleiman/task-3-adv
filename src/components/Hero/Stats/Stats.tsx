import styles from './Stats.module.css'
export interface PropsStats{
    statsItem : Array<TypeStatsItem>
}
export interface TypeStatsItem{
    stat : number
    desc : string
}
const Stats = ({statsItem}:PropsStats) => {
    return (
        <div className={styles.stats}>
            {
                statsItem?.map((item ,index)=>(
                    <div className={styles.container} key={index} >
                        <h3 className={styles.stat}>+{item.stat}</h3>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    )
    }

export default Stats
