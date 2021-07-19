import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import orangutan from "../../content/assets/orangutan.png"
class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <p className="page-template">
          <h1>Not Found</h1>
          Sorry, this page does not exist. Here's a monkey instead:
        </p>
        <img src={orangutan} width="200px" alt="A puzzled orangutan"></img>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
