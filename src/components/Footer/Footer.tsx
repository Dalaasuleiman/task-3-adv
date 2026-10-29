import styles from './Footer.module.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { TiLocation } from 'react-icons/ti'
import { GrLinkedin } from 'react-icons/gr'
import type { propsFooter, typeIcon_info } from '../../Data/FooterData'
import { Link } from 'react-router-dom'

const Footer = ({logo_desc , Home , AboutUs , Academics , ContactUs} : propsFooter) => {

    const infoContact :Array<typeIcon_info> =
[
    {
    icon : <MdEmail />,
    herf : "mailto:hello@littlelearners.com",
    info : "hello@littlelearners.com"
    },
    {
    icon : <FaPhoneAlt />,
    herf : "tel:+91 91813 23 2309",
    info : "+91 91813 23 2309"
    },
    {
    icon : <TiLocation />,
    herf : "",
    info : "Somewhere in the World"
    }
]
    const socialMedia :Array<typeIcon_info> =
[
    {
    icon : <FaFacebook />,
    info : "https://www.facebook.com/"
    },
    {
    icon : <FaTwitter />,
    info : "https://www.x.com/"
    },
    {
    icon : <GrLinkedin />,
    info : "https://www.linkedin.com/"
    }
]
    return (
        <footer>
            <div className={styles.container1}>
                <div className={styles.littleLearners}>
                    <img className={styles.logo} src={logo_desc.logo} alt="logo" />
                    <p className={styles.desc}> {logo_desc.desc}</p>
                    {
                        infoContact?.map((item ,index) => (
                            <div key={index} className={styles.infoContact}>
                                <div className={styles.iconContact}> {item.icon} </div>
                                <a className={styles.info} href={item.herf}>{item.info}</a>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.container2}>
                    <div className={styles.Home_AboutUs}>

                        <div  className={styles.home}>
                            <h3 className={styles.title}> <Link to="" className={styles.titleLink}>{Home.title}</Link></h3>
                            <ul className={styles.items}>
                                {Home.info?.map((item ,index) => (
                                    <li key={index}><a className={styles.item}  href="">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div  className={styles.aboutUs}>
                            <h3 className={styles.title}> <Link to="/about" className={styles.titleLink}>{AboutUs.title}</Link></h3>
                            <ul className={styles.items}>
                                {AboutUs.info?.map((item ,index) => (
                                    <li key={index}><a className={styles.item} href="">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className={styles.Academics_ContactUs}>

                        <div  className={styles.academics}>
                            <h3 className={styles.title}>  <Link to="/academics" className={styles.titleLink}>{Academics.title}</Link></h3>
                            <ul className={styles.items}>
                                {Academics.info?.map((item ,index) => (
                                    <li key={index}><a className={styles.item} href="">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div  className={styles.contactUs}>
                            <h3 className={styles.title}> <Link to="/contact" className={styles.titleLink}>{ContactUs.title}</Link></h3>
                            <ul className={styles.items} >
                                {ContactUs.info?.map((item ,index) => (
                                    <li key={index}><a className={styles.item} href="">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.container3}>
                <div className={styles.leftContent}>
                <p>
                    <a className={styles.Service_Policy}  href="">Terms of Service</a> | <a className={styles.Service_Policy} href="">Privacy Policy</a> | <a className={styles.Service_Policy} href="">Cookie Policy</a>
                </p>
                </div>

                <div className={styles.rightContent}>
                    {
                        socialMedia?.map((item ,index) => (
                            <a key={index} className={styles.socialMedia} href={item.info}>{item.icon}</a>
                        
                        ))
                    }
                </div>
            </div>

            <span className={styles.Copyright }>Copyright © [2023] Little Learners Academy. All rights reserved.</span>
        
        </footer>
    )
    }

export default Footer
