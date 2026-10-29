export interface typeNavbar{
    text : string,
    logo : string ,
    navItems : Array<typeNavItems>
}

export interface typeNavItems{
    namePage : string,
    path : string
}

export const menuItems = [
    {
        namePage :"Home",
        path : ""
    },
    {
        namePage :"About Us",
        path : "/about"
    },
    { 
        namePage :"Academics",
        path : "/academics"
    },
    {
        namePage :"Admissions",
        path : "/admissions"
    },
    {
        namePage :"Student Life",
        path : "/studentLife"
    }, 
    {
        namePage :"Contact",
        path : "/contact"
    }];