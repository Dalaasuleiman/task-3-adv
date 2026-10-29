import { cardsOurBenefits } from '../../../../Data/OurBenefitsData'
import CardOurBenefits from '../../../UI/CardOurBenefits/CardOurBenefits'
import type { TypeContent, TypeDesc, TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import TitleDescription from '../../../UI/TitleDescription/TitleDescription'
import styles from './OurBenefits.module.css'

const OurBenefits = () => {
        const content : TypeContent ={ 
        content :  "Children Deserve Bright Future",
        classContent :styles.content}
        const title : Array<TypeTitleParts> =[{ part : "Our Benefits" , classpart : "color_black"}]
        const desc : TypeDesc ={ 
            desc : "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.",
            classDesc :styles.description}
    return (
        <section className={styles.OurBenefits}>
                    <TitleDescription
                    className ={styles.title_Desc} 
                    content= {content}
                    titleParts= {title}
                    classTitle= {styles.title}
                    desc =  {desc}
                    />
                    <div className={styles.container}>
                        {
                            cardsOurBenefits?.map((card ,index) =>(
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

export default OurBenefits
