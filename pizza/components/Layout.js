import { Children } from "react"
import Footer from "./Fooetr"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
        {children}
            <Footer/>
        </>
    )
}

export default Layout