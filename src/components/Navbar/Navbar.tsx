
import { useState } from 'react';
import styles from './Navbar.module.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import type { typeNavbar } from '../../Data/NavData';

const Navbar = ({text , logo , navItems} :typeNavbar ) => {
    const [isShowMenu , setIsShowMenu ] = useState<boolean>(false)
    return (
        <>
            <nav>
            <div className={styles.top_Bar}>
                <p className={styles.top_Bar_Text}>{text}</p>
                <FaArrowRight className={styles.top_Bar_Icon}/>
                <div className={styles.topLeft}></div>
                <div className={styles.topRight}></div>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
                <img className={styles.img1} src="/assets/img/NavImg/img1.png" alt="img ball" />
                <img className={styles.img2} src="/assets/img/NavImg/img2.png" alt="img ball" />
                </div>
            <div className={styles.nav_Bar}>
                <div className={styles.div_logo}>
                    <img className={styles.Logo} src={logo} alt="logo Little learners"/>
                </div>
                <ul className={styles.navItems}>
                    {
                        navItems?.map((item ,index)=>(
                        <li className={styles.item} key={index}> <NavLink to={item.path} className={({ isActive }: { isActive: boolean }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{item.namePage}</NavLink></li>
                            
                        ))
                    }
                </ul>
                <button className={styles.nav_Menu} onClick={()=>{setIsShowMenu(!isShowMenu)}}> 
                    <HiMenuAlt3 />
                </button>
            </div>
            </nav>           
            <ul className={`${styles.nav_MenuItems} ${isShowMenu? styles.show : "" }`}>
                {
                    navItems?.map((item ,index)=>(
                        <li className={styles.item} key={index}> <NavLink to={item.path} className={({ isActive }: { isActive: boolean }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{item.namePage}</NavLink></li>
                    ))
                }
            </ul>
    </>
    )
    }

export default Navbar
