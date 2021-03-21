/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import { StaticQuery, graphql } from "gatsby"
 import ProjectListItem from "../projects/projectListItem"
 import "./projectList.css"

 const ProjectList = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

   return (
      <div className="project-list">
        <h1>Selected Projects</h1>

      {projects.map(({ node }) => {
        return (
          <ProjectListItem
            key={node.frontmatter.slug}
            node={node}
          />
        )
      })}
    </div>
   )
 }
 
 const projectQuery = graphql`
 query {
   site {
     siteMetadata {
       title
       description
     }
   }
   allMarkdownRemark(filter: { fields: { collection: { eq: "work"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
           size
           location
           client_name
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
    query={projectQuery}
    render={data => (
      <ProjectList props data={data} {...props} />
    )}
  />
)
 