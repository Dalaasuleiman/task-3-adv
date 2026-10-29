import type { ReactNode } from "react"

export interface propsFooter {
    logo_desc : typeLogo_desc ,
    Home : typeFooter ,
    AboutUs : typeFooter ,
    Academics : typeFooter ,
    ContactUs : typeFooter ,
}

interface typeLogo_desc {
    logo : string,
    desc : string
}

export interface typeIcon_info {
    icon : ReactNode,
    herf ?:string,
    info : string
} 

interface typeFooter {
    title : string,
    info : Array<string>
}


export const logo_desc : typeLogo_desc = {
    logo : "/assets/img/Logo.png",
    desc : "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
}

export const Home : typeFooter = {
    title : "Home",
    info : ["Features" , "Our Testimonials" , "FAQ"]
}

export const AboutUs : typeFooter = {
    title : "About Us",
    info : ["Our Mission" , "Our Vission" , "Awards and Recognitions" , "History" , "Teachers"]
}

export const Academics : typeFooter = {
    title : "Academics",
    info : ["Special Features" , "Gallery" ]
}

export const ContactUs : typeFooter = {
    title : "Contact Us",
    info : ["Information" , "Map & Direction" ]
}



