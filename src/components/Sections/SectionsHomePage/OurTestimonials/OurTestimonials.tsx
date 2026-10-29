
import { useState, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { cardOurTestimonials } from '../../../../Data/OurTestimonialsData'
import CardOurTestimonials from '../../../UI/CardOurTestimonials/CardOurTestimonials'
import TitleDescription, { type TypeContent, type TypeDesc, type TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import styles from './OurTestimonials.module.css'

const OurTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const content: TypeContent = { 
        content: "Their Happy Words 🤗",
        classContent: styles.content
    }
    const title: Array<TypeTitleParts> = [{ part: "Our Testimonials", classpart: "color_black" }]
    const desc: TypeDesc = { 
        desc: "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.",
        classDesc: styles.description
    }

    const number : number = (typeof window !== 'undefined' && window.innerWidth <= 992)? 1 : 3 ;

    const maxIndex: number= Math.max(0, cardOurTestimonials.length - number)
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
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
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
        <section className={styles.OurTestimonials}>
            <TitleDescription
                className={styles.title_Desc} 
                content={content}
                titleParts={title}
                classTitle={styles.title}
                desc={desc}
            />

            <div className={styles.slider}>
                <div 
                    ref={containerRef} 
                    className={styles.container}
                    style={{ 
                        overflowX: 'auto', 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none' 
                    }}
                >
                    {
                        cardOurTestimonials?.map((card, index) => (
                            <CardOurTestimonials 
                                key={index} 
                                img_person={card.img_person}
                                name={card.name} 
                                shapes={card.shapes} 
                                testimonial={card.testimonial}
                            />
                        ))
                    } 
                </div>

                <div className={styles.arrows}>
                    <button className={styles.arrow} onClick={movePrev}>
                        <FaArrowLeft className={isAtStart ? styles.disabledArrow : ''} />
                    </button>
                    <button className={styles.arrow} onClick={moveNext}>
                        <FaArrowRight className={isAtEnd ? styles.disabledArrow : ''} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurTestimonials