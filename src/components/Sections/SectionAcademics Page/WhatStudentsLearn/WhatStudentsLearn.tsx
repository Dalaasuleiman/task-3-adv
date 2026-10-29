import { cardWhatStudentsLearn } from '../../../../Data/WhatStudentsLearnData'
import CardWhatStudentsLearn from '../../../UI/CardWhatStudentsLearn/CardWhatStudentsLearn'
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import styles from './WhatStudentsLearn.module.css'

const WhatStudentsLearn = () => {
    const content : TypeContent ={ 
        content :  "Our Features",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "What Students Learn" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include",
        classDesc :styles.description}
    return (
        <section className={styles.whatStudentsLearn}>
            <TitleDescription
                className ={styles.title_Desc} 
                content= {content}
                titleParts= {title}
                classTitle= {styles.title}
                desc =  {desc} 
            />

                        <div className={styles.container}>
                {
                    cardWhatStudentsLearn?.map((card ,index) =>(
                        <CardWhatStudentsLearn
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

export default WhatStudentsLearn
