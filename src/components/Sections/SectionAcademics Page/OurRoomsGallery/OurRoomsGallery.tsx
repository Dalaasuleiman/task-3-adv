
import { classrooms, computerLab, filterCategories, gardenAndNatureArea, library, scienceLab } from '../../../../Data/OurRoomsGalleryData'
import CardOurRoomsGallery from '../../../UI/CardOurRoomsGallery/CardOurRoomsGallery'
import type { TypeContent, TypeDesc, TypeTitleParts } from '../../../UI/TitleDescription/TitleDescription'
import TitleDescription from '../../../UI/TitleDescription/TitleDescription'
import styles from './OurRoomsGallery.module.css'
import { useState } from 'react'

const OurRoomsGallery = () => {
    const content : TypeContent ={ 
        content :  "Our Gallery",
        classContent :styles.content}
    const title : Array<TypeTitleParts> =[{ part : "Our Rooms Gallery" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.",
        classDesc :styles.description}
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const handleFilter = (category: string) => {
        setSelectedCategory(category);
    }
    return (
        <section className={styles.ourRoomsGallery}>
            <TitleDescription
                className ={styles.title_Desc} 
                content= {content}
                titleParts= {title}
                classTitle= {styles.title}
                desc =  {desc} 
            />
            <div className={styles.container}>
                <div className={styles.btnsCategories}>
                    {
                        filterCategories?.map((item , index)=>(
                            <button className={`${styles.btn} ${selectedCategory === item ? styles.active : ''}`} key={index} onClick={()=>handleFilter(item)}>{item}</button>
                        ))
                    }
                </div>

                <div className={styles.cards}>
                    {(selectedCategory === 'All' || selectedCategory === 'Classrooms') && classrooms&&  <CardOurRoomsGallery img = {classrooms.img} title={classrooms.title} desc={classrooms.desc}/>}
                    {(selectedCategory === 'All' || selectedCategory === 'Library') && library &&  <CardOurRoomsGallery img = {library.img} title={library.title} desc={library.desc}/>}
                    {(selectedCategory === 'All' || selectedCategory === 'Science Lab') &&scienceLab&&  <CardOurRoomsGallery img = {scienceLab.img} title={scienceLab.title} desc={scienceLab.desc}/>}
                    {(selectedCategory === 'All' || selectedCategory === 'Computer Lab') &&computerLab&&  <CardOurRoomsGallery img = {computerLab.img} title={computerLab.title} desc={computerLab.desc}/>}
                    {(selectedCategory === 'All' || selectedCategory === 'Garden and Nature Area') &&gardenAndNatureArea&&  <CardOurRoomsGallery img = {gardenAndNatureArea.img} title={gardenAndNatureArea.title} desc={gardenAndNatureArea.desc}/>}
                </div>
            </div>
        
        </section>
    )
}

export default OurRoomsGallery
