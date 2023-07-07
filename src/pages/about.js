
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main>
        <Layout pageHeading='We Motopart'pageTitle='Im making this by following the Gatsby Tutorial'>
        About Motopart page contents will come here
        </Layout>
   
    </main>
  )
}
export const Head = () => (
    <>
      <title>We are Motopart</title>
      <meta name="Motopart.org" content="Your description" />
    </>
  )


export default AboutPage