
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <main>
        <Layout pageHeading='Contact Motopart'pageTitle='Im making this by following the Gatsby Tutorial'>
        Contact us page contents will come here
        </Layout>
    </main>
  )
}
export const Head = () => (
    <>
      <title>Contact Us</title>
      <meta name="Motopart.org" content="Your description" />
    </>
  )


export default ContactPage