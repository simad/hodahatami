import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articles/articleList"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
const ArticlesPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Insights"
        keywords={[`portfolio`, `architecture`, `articles`, `case study`]}
      />
      
      {<ArticleList />}

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
      <ArticlesPage props data={data} {...props} />
    )}
  />
)
