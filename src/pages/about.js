import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SocialIcons from "../components/social/socialIcons"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`architecture`, `design`, `psychology`, `art`]} />
         
      <article className="page-template no-image">
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
For the past 12 years, I've worked as a Creative Design Lead with over 50 clients, and completed over 150 projects.

          </p>
         <SocialIcons />

          <p><a href={data.pdf.publicURL} target="_blank" rel="noreferrer">Download my CV</a></p>
          </div>
          </div>
          <h1>Worked with</h1>

          <div className="client-list">
            <div>
              <ul> 
                <h3>Banks, Finance, Hedge Funds</h3>
                <li>City Asset Management</li>
                <li>City Equities Ltd.</li>
                <li>Earth Capital Partners Llp.</li>
                <li>Hengistbury Investment Partners</li>
                <li>Jupiter Asset Mgt.</li>
                <li>Kairos</li>
                <li>Key Square Capital Management</li>
                <li>Marubeni Europe Plc.</li>
                <li>Polunin Capital Partners</li>
                <li>Raymond James Investment Services</li>
                <li>Sator Group</li>
                <li>Stratton Street Capital Llp.</li>
              </ul>
              <ul> 
                <h3>Charity</h3>
                <li>British Red Cross</li>
                <li>Christian Aid</li>
                <li>RNBI</li>
                <li>YMCA</li>
              </ul>
              <ul> 
                <h3>Education</h3>
                <li>Kaplan Inc.</li>
                <li>Shillingtons</li>
              </ul>
              <ul> 
                <h3>Oil, GAS, Utilities</h3>
                <li>Savannah Petroleum</li>
                <li>Investors</li>
              </ul>
              <ul> 
                <h3>Services</h3>
                <li>The Royal Institute of International Affairs</li>
                <li>World Nuclear Association</li>
              </ul>
              <ul> 
                <h3>PR & Advertising</h3>
                <li>Brands2Life</li>
                <li>Sportquake</li>
              </ul>
              <ul> 
                <h3>Property</h3>
                <li>Mellersh and Harding</li>
                <li>Wilks Head and Eve</li>
              </ul>
            </div>
            <div>
            <ul> 
                <h3>Insurance</h3>
                <li>Allianz Insurance</li>
                <li>Navigators</li>
                <li>Price Forbes</li>
                <li>Simply Business</li>
              </ul>
              <ul> 
                <h3>IT</h3>
                <li>Base kit</li>
                <li>Double Edge Professional Services</li>
                <li>Ebury Partners</li>
                <li>First Source</li>
              </ul>
              <ul> 
                <h3>Legal</h3>
                <li>Doughty Street Chambers</li>
                <li>Penningtons Manches Llp.</li>
                <li>RGC Jenkins</li>
                <li>Wilberforce Chambers</li>
              </ul>
              <ul> 
                <h3>Pharmaceuticals</h3>
                <li>Pfeizer</li>
              </ul>
              <ul> 
                <h3>Transport</h3>
                <li>Federal Express</li>
                <li>Hitachi Rail Europe Ltd.</li>
              </ul>
              <ul> 
                <h3>Manufacturing</h3>
                <li>Hitachi Europe</li>
                <li>YKK Europe Ltd.</li>
              </ul>
                <ul> 
                <h3>Media</h3>
                <li>Incisive Media Business</li>
              </ul>
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
    pdf: file(
      name: { eq: "hoda_hatami_cv" }
    ) {
      publicURL
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
