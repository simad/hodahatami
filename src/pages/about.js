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
      <SEO title="About" keywords={[`architecture`, `design`, `psychology`, `art`]} />
         
      <article className="project-content page-template no-image">
        <div className="project">
          <div className="about">
          <div className="forty">
          <figure className="kg-card kg-image-card padded">
            <Img
              fluid={data.hoda.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          </div>
          <div className="sixty">
          <h1>Hello, I'm Hoda</h1>
          <p>
          I am a keen learner and my passion is creating workplaces where humans can thrive. To achieve that, I have obtained a Masters in Organizational psychology, with a focus on Human Behaviour in the Workplace.<br/><br/>
<b>I strongly believe that the culture of work has evolved, and it is my responsibility as a designer to create spaces in which mental health is as important as productivity.</b><br/><br/>
          From a young age I was always fascinated with Art and Design, the interaction between form, colour, light, pattern and texture. <br/>
I won a number of internships at leading International & global architecture firms Swanke Hayden Connell Architects & MMoser Associates, giving me the perfect platform to begin my career.<br/>
For the past 12 years, I've worked as a Senior Designer and Design Director with over 50 clients, and completed over 150 projects.

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
    hoda: file(
      relativePath: { eq: "hoda.jpg" }
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
