import * as React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import { container, heading, navLinks, navLinkItem, navLinkText,footerText } from '../components/layout.module.css'

console.log('container: ', container)

const Layout = ({pageTitle, pageHeading,children}) => {
    return (
        <main className={container}>
            <nav>
                <ul className={navLinks}>
           <li className={navLinkItem}> <Link className={navLinkText} to="/">Motopart</Link></li>
           <li className={navLinkItem}> <Link className={navLinkText} to="/about">About</Link></li>
           <li className={navLinkItem}> <Link className={navLinkText} to="/contact">Contact Us</Link></li>
               </ul>
             </nav>
             <h1 className={heading}>{pageHeading}</h1>
             <h3>{pageTitle}</h3>
             {children}
        
         <Footer></Footer>
        </main>
        )
    }
export default Layout