
import style from'../HeroOtherPages/HeroOtherPages.module.css'
import HeroOtherPages from '../HeroOtherPages/HeroOtherPages'
import type { TypeContent, TypeDesc, TypeTitleParts } from '../UI/TitleDescription/TitleDescription'
import OurSpecialFeatures from '../Sections/SectionAcademics Page/OurSpecialFeatures/OurSpecialFeatures'
import Main from '../Main/Main'
import WhatStudentsLearn from '../Sections/SectionAcademics Page/WhatStudentsLearn/WhatStudentsLearn'
import OurRoomsGallery from '../Sections/SectionAcademics Page/OurRoomsGallery/OurRoomsGallery'

const AcademicsPage = () => { 
    const content : TypeContent ={ 
        content :  "Academics",
        classContent :style.content}
    const title : Array<TypeTitleParts> =[{ part : "Nurturing Young Minds for Success" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.",
        classDesc :style.description}
    return (
        <> 
            <HeroOtherPages 
                content ={content}
                title={title}
                desc={desc}/>
            <Main>
                <OurSpecialFeatures/>
                <WhatStudentsLearn/>
                <OurRoomsGallery/>
            </Main>
        </>

        
    )
    }

export default AcademicsPage
