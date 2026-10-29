
import { cardNavigateThrough } from '../../../../Data/NavigateThroughData'
import CardNavigateThrough from '../../../UI/CardNavigateThrough/CardNavigateThrough'
import type { TypeContent, TypeDesc, TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import TitleDescription from '../../../UI/TitleDescription/TitleDescription'
import styles from './NavigateThrough.module.css'

const NavigateThrough = () => {
        const content : TypeContent ={ 
        content :  "Explore More",
        classContent :styles.content}
        const title : Array<TypeTitleParts> =[{ part : "Navigate through our Pages" , classpart : "color_black"}]
            const desc : TypeDesc ={ 
            desc : "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school",
            classDesc :styles.description}
    return (
        <section className={styles.navigateThrough}>
            <TitleDescription
                    className ={styles.title_Desc} 
                    content= {content}
                    titleParts= {title}
                    classTitle= {styles.title}
                    desc =  {desc}
                    />

            <div className={styles.container}>
                {
                    cardNavigateThrough?.map((card ,index) =>(
                        <CardNavigateThrough 
                            key={index}
                            title ={card.title}
                            desc ={card.desc}
                            />
                    ))
                }
            </div>
        
        </section>
    )
    }

export default NavigateThrough
