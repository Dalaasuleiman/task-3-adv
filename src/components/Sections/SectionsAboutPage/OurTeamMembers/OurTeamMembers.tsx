import styles from './OurTeamMembers.module.css'
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import CardOurTeamMembers from '../../../UI/CardOurTeamMembers/CardOurTeamMembers'
import { cardOurTeamMembers } from '../../../../Data/OurTeamMembers'

const OurTeamMembers = () => {
    const content : TypeContent ={ 
        content :  "Our Teachers With Experties",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "Our Team Members" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.",
        classDesc :styles.description}
    return (
        <section className={styles.ourTeamMembers}>
                <TitleDescription
                    className ={styles.title_Desc} 
                    content= {content}
                    titleParts= {title}
                    classTitle= {styles.title}
                    desc =  {desc}
                />

                <div className={styles.container}>
                    {
                        cardOurTeamMembers?.map((item , index) =>(
                            <CardOurTeamMembers
                            key={index}
                            img = {item.img}
                            name ={item.name}
                            title ={item.title}
                            desc ={item.desc}
                            />
                        ))
                    }

                </div>
        </section>
    )
}

export default OurTeamMembers
