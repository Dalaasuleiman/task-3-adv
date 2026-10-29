import { useState, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styles from './CardOurRoomsGallery.module.css'
import type { PropsCardOurRoomsGallery } from '../../../Data/OurRoomsGalleryData'

const CardOurRoomsGallery = ({ img, title, desc }: PropsCardOurRoomsGallery) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const getScrollStep = (): number => {
        return (typeof window !== 'undefined' && window.innerWidth <= 992) ? 1 : 4
    }
    const itemsPerView = getScrollStep()
    const totalImages = img?.length || 0
    const maxIndex: number = Math.max(0, totalImages - itemsPerView)
    const isAtStart: boolean = currentIndex === 0
    const isAtEnd: boolean = currentIndex >= maxIndex || totalImages <= itemsPerView

    const moveNext = () => {
        if (currentIndex >= maxIndex || totalImages <= itemsPerView) return
        const step = getScrollStep()

        if (containerRef.current) {
            const firstImg: HTMLElement = containerRef.current.firstElementChild as HTMLElement
            if (firstImg) {
                const imgWidth: number = firstImg.offsetWidth
                const style: CSSStyleDeclaration = window.getComputedStyle(containerRef.current)
                const gap: number = parseFloat(style.gap) || 0
                const scrollAmount = (imgWidth + gap) * step
                containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
        }
        setCurrentIndex((prev) => Math.min(prev + step, maxIndex))
    }

    const movePrev = () => {
        if (currentIndex <= 0) return
        const step = getScrollStep()

        if (containerRef.current) {
            const firstImg: HTMLElement = containerRef.current.firstElementChild as HTMLElement
            if (firstImg) {
                const imgWidth: number = firstImg.offsetWidth
                const style: CSSStyleDeclaration = window.getComputedStyle(containerRef.current)
                const gap: number = parseFloat(style.gap) || 0

                const scrollAmount = (imgWidth + gap) * step
                containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            }
        }
        setCurrentIndex((prev) => Math.max(prev - step, 0))
    }

    return (
        <div className={styles.card}>
            <div 
                ref={containerRef}
                className={styles.containerImgs}
                style={{ 
                    overflowX: 'auto', 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    display: 'flex',
                    scrollSnapType: 'x mandatory'
                }}
            >
                {
                    img?.map((item, index) => (
                        <img 
                            key={index} 
                            className={styles.img} 
                            src={item} 
                            alt={title} 
                            style={{ scrollSnapAlign: 'start', flexShrink: 0 }}
                        />
                    ))
                }
            </div>

            <div className={styles.container}>
                <div className={styles.title_btnSlider}>
                    <h3 className={styles.title}>{title}</h3>

                    <div className={styles.arrows}>
                        <button className={styles.arrow} onClick={movePrev} disabled={isAtStart}>
                            <FaArrowLeft className={isAtStart ? styles.disabledArrow : ''} />
                        </button>
                        <button className={styles.arrow} onClick={moveNext} disabled={isAtEnd}>
                            <FaArrowRight className={isAtEnd ? styles.disabledArrow : ''} />
                        </button>
                    </div>
                </div>

                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}

export default CardOurRoomsGallery