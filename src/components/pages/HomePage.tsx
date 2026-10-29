
import Main from '../Main/Main'
import OurBenefits from '../Sections/SectionsHomePage/OurBenefits/OurBenefits'
import OurTestimonials from '../Sections/SectionsHomePage/OurTestimonials/OurTestimonials'
import FrequentlyAskedQuestions from '../Sections/SectionsHomePage/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import NavigateThrough from '../Sections/SectionsHomePage/NavigateThrough/NavigateThrough'
import Hero from '../Hero/Hero'

const HomePage = () => {
    return (
    <>
        <Hero/>
        <Main>
            <OurBenefits/>
            <OurTestimonials/>
            <FrequentlyAskedQuestions/>
            <NavigateThrough/>
        </Main>
    </>
    )
    }

export default HomePage
