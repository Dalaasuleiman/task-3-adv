import { cardOurSpecialFeatures } from '../../../../Data/OurSpecialFeaturesData'
import CardOurBenefits from '../../../UI/CardOurBenefits/CardOurBenefits'
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import styles from './OurSpecialFeatures.module.css'

const OurSpecialFeatures = () => {
    const content : TypeContent ={ 
        content :  "Our Features",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "Our Special Features" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
        classDesc :styles.description}
    return (
        <section className={styles.ourSpecialFeatures}>
            <TitleDescription
                className ={styles.title_Desc} 
                content= {content}
                titleParts= {title}
                classTitle= {styles.title}
                desc =  {desc} 
            />
            <div className={styles.container}>
                {
                    cardOurSpecialFeatures?.map((card ,index) =>(
                        <CardOurBenefits
                            key={index}
                            img = {card.img}
                            title ={card.title}
                            desc ={card.desc}
                            />
                    ))
                }
            </div>
        </section>
    )
}

export default OurSpecialFeatures
