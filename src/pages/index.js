import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pageHeading='Motopart'pageTitle='Welcome to motopart'></Layout>
      </main>
  )
}

export const Head = () => <title>Motopart</title>

export default IndexPage