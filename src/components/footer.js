import * as React from 'react'
import {footerText } from '../components/layout.module.css'


function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
        <footer className={footerText}>
        <div>&copy; {currentYear} Motopart.org
        </div>
       </footer>
    );
  }
  
  export default Footer;