import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro/intro"
import Cover from "../components/cover/cover"
import Testimonials from "../components/testimonials/testimonialSlider"
import ProjectList from "../components/projects/projectList"
import DesignProcess from "../components/designprocess/designProcess"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const Index = ({ data }) => {
  const siteMetadata = data.site.siteMetadata

  return (
    <Layout title={siteMetadata.title}>
      <SEO
        title="Portfolio"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {<Cover />}

      {<Intro />}
      
      {<Testimonials />}
     
      {/* {<DesignProcess />} */}
    
      {<ProjectList />}
      
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index props data={data} {...props} />
    )}
  />
)
