import { cardOurMissionVisions } from "../../../../Data/OurMission&VisionsData"
import CardOurMissionVisions from "../../../UI/CardOurMission&Visions/CardOurMission&Visions"
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from "../../../UI/TitleDescription/TitleDescription"
import styles from './OurMission&Visions.module.css'


const OurMissionVisions = () => {
    const content : TypeContent ={ 
        content :  "Mission & Visions",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "Our Mission & Visions" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.",
        classDesc :styles.description}
    return (
        <section className={styles.ourMissionVisions}>
            <TitleDescription
                className ={styles.title_Desc} 
                content= {content}
                titleParts= {title}
                classTitle= {styles.title}
                desc =  {desc}
                />

                <div className={styles.container}>
                    {
                        cardOurMissionVisions?.map((item , index)=>(
                            <CardOurMissionVisions
                            key={index}
                            title = {item.title}
                            img ={item.img}
                            desc ={item.desc}
                            />
                        ))
                    }
                </div>
        
        </section>
        
    )
    }

export default OurMissionVisions

