import styles from './CardOurBenefits.module.css'
export interface PropsCardOurBenefits{
    className ?:string,
    img : string,
    title : string ,
    desc : string
}
const CardOurBenefits = ({ className,img , title , desc} : PropsCardOurBenefits) => {
    return (
        <div className={`${className} ${styles.card}`} >
            <div className={styles.icon}>
                <img className={styles.img} src={img} alt="Icon" />
            </div>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
    }

export default CardOurBenefits
