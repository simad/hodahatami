import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ArtPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Art" keywords={[`architecture`, `design`, `psychology`, `art`]} />
         
      <article className="page-template post-content art project-content-body">
          <h1>Art</h1>
          <p>
            Art is distilled self-expression. Over the years I have practiced many styles, from sculpting to large scale paintings, 
            from sketching to using mediums like concrete. It's where my creativity shines and where I find true freedom.
          </p>
          <figure>
           <Img fluid={data.hoda.childImageSharp.fluid}  />
          </figure>
          <figure>
           <Img fluid={data.art2.childImageSharp.fluid}  />
          </figure>
          <figure>
           <Img fluid={data.art3.childImageSharp.fluid}  />
          </figure>
          <figure>
           <Img fluid={data.art4.childImageSharp.fluid}  />
          </figure>
          <figure>
           <Img fluid={data.art1.childImageSharp.fluid}  />
          </figure>
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
      relativePath: { eq: "hoda_art.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    art1: file(
      relativePath: { eq: "1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    art2: file(
      relativePath: { eq: "2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    art3: file(
      relativePath: { eq: "3.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    art4: file(
      relativePath: { eq: "4.jpg" }
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
      <ArtPage location={props.location} data={data} {...props} />
    )}
  />
)
