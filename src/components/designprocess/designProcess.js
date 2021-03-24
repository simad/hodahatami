import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./designProcess.css"

const DesignProcess = ({ data }) => {
  return (
    <div className="project-list">
      <h1>How I Work</h1>
      <figure className="kg-card kg-width-full">
            <Img
              fluid={data.designProcess.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
    </div>
  )
}


const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    designProcess: file(
      relativePath: { eq: "designprocess.png" }
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
      <DesignProcess data={data} {...props} />
    )}
  />
)

