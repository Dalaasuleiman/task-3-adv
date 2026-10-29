
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { AboutUs, Academics, ContactUs, Home, logo_desc } from '../../Data/FooterData';
import Footer from '../Footer/Footer';
import { menuItems } from '../../Data/NavData';
import ScrollToTop from '../../Data/ScrollToTop';

const Root = () => {
    return (
        <div>
            <ScrollToTop/>
            <Navbar
                text ="Admission is Open, Grab your seat now"
                logo ="/assets/img/Logo.png"
                navItems = {menuItems}
            />

            <Outlet/>

            <Footer 
                logo_desc ={logo_desc}
                Home = {Home}
                AboutUs = {AboutUs}
                Academics = {Academics}
                ContactUs = {ContactUs}
                /> 
        </div>
    )
    }

export default Root
