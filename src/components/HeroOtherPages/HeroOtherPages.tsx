import TitleDescription, {type TypeContent, type TypeDesc, type TypeTitleParts } from '../UI/TitleDescription/TitleDescription'
import styles from './HeroOtherPages.module.css'
interface PropsHeroOtherPages {
    content : TypeContent,
    title : Array<TypeTitleParts> ,
    desc : TypeDesc
}
const HeroOtherPages = ({content ,title ,desc} :PropsHeroOtherPages ) => {

    return (
        <div className={styles.hero}>
            <TitleDescription
                className ={styles.title_Desc} 
                content= {content}
                titleParts= {title}
                classTitle= {styles.title}
                desc =  {desc}
                classDiv={styles.container}
                />
        </div>
    ) 
}

export default HeroOtherPages
