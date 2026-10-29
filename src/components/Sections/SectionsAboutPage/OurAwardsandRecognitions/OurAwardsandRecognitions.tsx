import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { cardOurAwardsandRecognitions} from '../../../../Data/OurAwardsandRecognitionsData'
import CardOurBenefits from '../../../UI/CardOurBenefits/CardOurBenefits'
import type { TypeContent, TypeDesc, TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import TitleDescription from '../../../UI/TitleDescription/TitleDescription'
import styles from './OurAwardsandRecognitions.module.css'
import { useRef, useState } from 'react'

const OurAwardsandRecognitions = () => {
    const content : TypeContent ={ 
        content :  "Our Achievements",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "Our Awards and Recognitions" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.",
        classDesc :styles.description}

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const number : number = (typeof window !== 'undefined' && window.innerWidth <= 992)? 1 : 3 ;

    const maxIndex: number= Math.max(0, cardOurAwardsandRecognitions.length - number)
    const isAtStart: boolean = currentIndex === 0
    const isAtEnd: boolean = currentIndex >= maxIndex

    const moveNext = () => {
        if (currentIndex >= maxIndex) return
        if (containerRef.current) {
            const firstCard: HTMLElement= containerRef.current.firstElementChild as HTMLElement
            if (firstCard) {
                const cardWidth: number = firstCard.offsetWidth
                const style: CSSStyleDeclaration = window.getComputedStyle(containerRef.current)
                const gap: number = parseFloat(style.gap) || 20

                containerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' })
            }
        }
        setCurrentIndex((prev) => (prev < maxIndex ? prev +1 : 0))
    }

    const movePrev = () => {
        if (currentIndex <= 0) return
        if (containerRef.current) {
            const firstCard: HTMLElement = containerRef.current.firstElementChild as HTMLElement
            if (firstCard) {
                const cardWidth: number = firstCard.offsetWidth
                const style: CSSStyleDeclaration = window.getComputedStyle(containerRef.current)
                const gap: number = parseFloat(style.gap) || 20
                containerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' })
            }
        }
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
    }
    return (
        <section className={styles.ourAwardsandRecognitions}>
            <TitleDescription
                className ={styles.title_Desc} 
                content= {content}
                titleParts= {title}
                classTitle= {styles.title}
                desc =  {desc}
                />

                <div className={styles.slider}>
                    <div className={styles.container}
                        ref={containerRef} 
                        style={{ 
                            overflowX: 'auto', 
                            scrollbarWidth: 'none', 
                            msOverflowStyle: 'none' 
                        }}>
                        {
                            cardOurAwardsandRecognitions?.map((item , index)=>(
                                <CardOurBenefits 
                                key={index}
                                className={styles.cardOurAwards}
                                img = {item.img}
                                title = {item.title}
                                desc ={item.desc}
                                />
                            ))
                        } 
                    </div>
                    <div className={styles.container2}>
                        <p className={styles.text}>8 More Awards</p>
                        <div className={styles.arrows}>
                            <button className={styles.arrow} onClick={movePrev}>
                        <FaArrowLeft className={isAtStart ? styles.disabledArrow : ''} />
                    </button>
                    <button className={styles.arrow} onClick={moveNext}>
                        <FaArrowRight className={isAtEnd ? styles.disabledArrow : ''} />
                    </button>
                        </div>
                    </div>

                </div>
        
        </section>
    )
}

export default OurAwardsandRecognitions

