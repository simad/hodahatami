/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import { StaticQuery, graphql } from "gatsby"
 import ArticleListItem from "./articleListItem"
 import "./articles.css"

 const ArticleList = ({ data }) => {
  const articles = data.allMarkdownRemark.edges

   return (
      <div className="page-template article-list">
        <h1>What I am thinking about</h1>

      {articles.map(({ node }) => {
        return (
          <ArticleListItem
            key={node.frontmatter.slug}
            node={node}
          />
        )
      })} 
    </div>
   )
 }
 
 const articlesQuery = graphql`
 query {
   site {
     siteMetadata {
       title
       description
     }
   }
   allMarkdownRemark(filter: { fields: { collection: { eq: "insights"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
     edges {
       node {
         excerpt
         fields {
           collection
         }
         frontmatter {
           date(formatString: "MMMM DD, YYYY")
           title
           slug
           description
           thumbnail {
             childImageSharp {
               fluid(maxWidth: 1360) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
         }
       }
     }
   }
 }
`
export default props => (
  <StaticQuery
    query={articlesQuery}
    render={data => (
      <ArticleList props data={data} {...props} />
    )}
  />
)
 