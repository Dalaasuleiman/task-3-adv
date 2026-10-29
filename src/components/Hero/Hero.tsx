import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../UI/TitleDescription/TitleDescription'
import styles from './Hero.module.css'
import Stats, { type TypeStatsItem } from './Stats/Stats'

const Hero = () => {
    const title : Array<TypeTitleParts> =[
        { part : "Where Young Minds Blossom and" , classpart : "color_black"},
        { part : "Dreams Take Flight." , classpart : "color_orange"}
    ]
    const desc : TypeDesc ={ 
        desc : "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
        classDesc :styles.description}
    const content : TypeContent ={ 
        content :  "Welcome to Little Learners Academy",
        classContent :styles.content}
    const stats : Array<TypeStatsItem> =[
        {
            stat : 7000,
            desc : "Students Passed Out"
        },
        {
            stat : 37,
            desc : "Awards & Recognitions"
        },
        {
            stat : 15,
            desc : "Experience Educators"
        }
    ]
    return (
        <div className={styles.hero}>
            <div className={styles.hero_Img}>
                <img  className={styles.children} src="/assets/img/HomeImg/HeroImg/children.png" alt="photo children" />
                <img  className={styles.AbstractDesign} src="/assets/img/HomeImg/HeroImg/AbstractDesign.png" alt="photo dots" />
                <div className={`${styles.circle1} ${styles.circle}`}></div>
                <div className={`${styles.circle2} ${styles.circle}`}></div>
                <div className={`${styles.circle3} ${styles.circle}`}></div>
                <div className={`${styles.circle4} ${styles.circle}`}></div>


            </div>
            <div className={styles.hero_text}>
                <TitleDescription
                    className ={styles.title_Desc} 
                    content= {content}
                    titleParts= {title}
                    classTitle= {styles.title}
                    desc =  {desc}
                    />
                    <Stats
                    statsItem = {stats}
                    />
            </div>
        
        </div>
    )
    }

export default Hero
