import { FiMinus } from 'react-icons/fi'
import styles from './CardQuestions.module.css'
import { GoPlus } from 'react-icons/go'
import { useState } from 'react'
export interface PropsCardQuestions{
    open ?: boolean,
    question : string,
    answer : string
}
const CardQuestions = ({open, question , answer} : PropsCardQuestions ) => {
    const [showAnswer , setShowAnswer] = useState <boolean>(open || false)
    return (
        <div className={styles.card} style={showAnswer?{backgroundColor: "#FFFFFF"} : {backgroundColor: "#FFEFE5"}}>
            <div className={styles.container}>
                <h3 className={styles.questions}>{question}</h3>
                <div className={styles.div_icon } onClick = {()=>setShowAnswer(!showAnswer)}>
                    {showAnswer? <FiMinus /> : <GoPlus />}
                </div>
            </div>
            {showAnswer && <p className={styles.answer}>{answer}</p>}        
        </div>
    )
    }

export default CardQuestions
