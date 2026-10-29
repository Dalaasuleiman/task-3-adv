import { questionsAnswer } from '../../../../Data/Questions&AnswerData'
import CardQuestions, { type PropsCardQuestions } from '../../../UI/CardQuestions/CardQuestions'
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import styles from './FrequentlyAskedQuestions.module.css'

const FrequentlyAskedQuestions = () => {
        const content : TypeContent ={ 
        content :  "Solutions For The Doubts",
        classContent :styles.content}
        const title : Array<TypeTitleParts> =[{ part : "Frequently Asked Questions" , classpart : "color_black"}]
            const desc : TypeDesc ={ 
            desc : "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.",
            classDesc :styles.description}
        const number : number = Math.ceil(questionsAnswer.length / 2);
        const leftColumn : Array<PropsCardQuestions> = questionsAnswer.slice(0, number);  
        const rightColumn : Array<PropsCardQuestions>= questionsAnswer.slice(number);
    return (
        <section className={styles.FrequentlyAskedQuestions}>
                <TitleDescription
                    className ={styles.title_Desc} 
                    content= {content}
                    titleParts= {title}
                    classTitle= {styles.title}
                    desc =  {desc}
                    />
                <div className={styles.container}>
                    <div className={styles.container1}>
                        {leftColumn?.map((item , index) =>(
                            <CardQuestions 
                            key={index}
                            open={item.open}
                            question = {item.question}
                            answer = {item.answer}
                            />
                        )) }
                    </div>
                    <div className={styles.container1}>
                        {rightColumn?.map((item , index) =>(
                            <CardQuestions 
                            key={index}
                            open={item.open}
                            question = {item.question}
                            answer = {item.answer}
                            />
                        )) }
                    </div>
                </div>
        
        </section>
    )
    }

export default FrequentlyAskedQuestions
