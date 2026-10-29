import type { PropsCardOurTestimonials } from '../../../Data/OurTestimonialsData'
import styles from './CardOurTestimonials.module.css'

const CardOurTestimonials = ({img_person  ,name  ,shapes ,testimonial} :PropsCardOurTestimonials) => {
    return (
        <div className={styles.card}>
            <div className={styles.divImg}>
                <img className={styles.img} src={img_person} alt="" />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.shapes}>
                {shapes?.map((item ,index) =>(
                    <img key={index} className={styles.shape} src={item} alt="shape" />
                ))}
            </div>
            <p className={styles.Testimonial}>{testimonial}</p>
        </div>
    )
    }

export default CardOurTestimonials
