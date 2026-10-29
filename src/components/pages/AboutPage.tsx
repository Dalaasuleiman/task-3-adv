import styles from '../Main/Main.module.css'
import style from'../HeroOtherPages/HeroOtherPages.module.css'
import Main from '../Main/Main'
import OurAwardsandRecognitions from '../Sections/SectionsAboutPage/OurAwardsandRecognitions/OurAwardsandRecognitions'
import OurMissionVisions from '../Sections/SectionsAboutPage/OurMission&Visions/OurMission&Visions'
import OurTeamMembers from '../Sections/SectionsAboutPage/OurTeamMembers/OurTeamMembers'
import OurHistory from '../Sections/SectionsAboutPage/OurHistory/OurHistory'
import HeroOtherPages from '../HeroOtherPages/HeroOtherPages'
import type { TypeContent, TypeDesc, TypeTitleParts } from '../UI/TitleDescription/TitleDescription'

const AboutPage = () => {
    const content : TypeContent ={ 
        content :  "Overview",
        classContent :style.content}
    const title : Array<TypeTitleParts> =[{ part : "Welcome to Little Learners Academy" , classpart : "color_black"}]
    const desc : TypeDesc ={ 
        desc : "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.",
        classDesc :style.description}
    return (
        <>
            <HeroOtherPages 
                content ={content}
                title={title}
                desc={desc}/>
            <Main 
            className={styles.mainAbout}>
                <OurMissionVisions/>
                <OurAwardsandRecognitions/>
                <OurHistory/>
                <OurTeamMembers/>
                
            </Main>
            
        </>
    )
    }

export default AboutPage
