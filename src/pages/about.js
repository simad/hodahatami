import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SocialIcons from "../components/social/socialIcons"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
         
      <article className="project-content page-template no-image">
        <div className="project">
          <div className="about">
          <div className="forty">
          <figure className="kg-card kg-image-card padded">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          </div>
          <div className="sixty">
          <h1>Hello, I'm Hoda Guzu</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
         <SocialIcons />

          <p><a href="https://linkedin.com">Download my CV</a></p>
          </div>
          </div>

          <div className="project-info">
          <h1>Client List</h1>

            <div className="padded-total">
              <ul> 
                <h3>Sector1</h3>
                <li>Client1</li>
                <li>Client2</li>
                <li>Client3</li>
              </ul>
              <ul> 
                <h3>Sector2</h3>
                <li>Client1</li>
                <li>Client2</li>
                <li>Client3</li>
              </ul>
            </div>
            <div className="padded-total">
            <ul> 
                <h3>Sector3</h3>
                <li>Client1</li>
                <li>Client2</li>
                <li>Client3</li>
              </ul>
              <ul> 
                <h3>Sector1</h3>
                <li>Client1</li>
                <li>Client2</li>
                <li>Client3</li>
              </ul>
            </div>
            <div className="padded-total">
            <ul> 
                <h3>Sector4</h3>
                <li>Client1</li>
                <li>Client2</li>
                <li>Client3</li>
              </ul>
              <ul> 
                <h3>Sector1</h3>
                <li>Client1</li>
                <li>Client2</li>
                <li>Client3</li>
              </ul>
            </div>
            </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
