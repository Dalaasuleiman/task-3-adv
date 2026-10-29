import { cardOurHistory } from '../../../../Data/OurHistoryData'
import CardOurHistory from '../../../UI/CardOurHistory/CardOurHistory'
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import styles from './OurHistory.module.css'

const OurHistory = () => {
    const content : TypeContent ={ 
        content :  "Our Progressive Journey",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "Our History" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment",
        classDesc :styles.description}
    return (
        <section className={styles.ourHistory}>
                <TitleDescription
                    className ={styles.title_Desc} 
                    content= {content}
                    titleParts= {title}
                    classTitle= {styles.title}
                    desc =  {desc}
                />

                <div className={styles.container}>
                    <div className={styles.cards}>
                        <div className={styles.line}></div>
                        {
                            cardOurHistory?.map((item ,index) =>(
                                <CardOurHistory
                                key={index}
                                year ={item.year}
                                title ={item.title}
                                desc ={item.desc}
                                />
                            ))
                        }

                    </div>
                </div>
        
        </section>
    )
}

export default OurHistory
