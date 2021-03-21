const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/blog/blog-post.js`)
  const projectTemplate = path.resolve(`./src/templates/work/project.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                collection
              }
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const allEdges = result.data.allMarkdownRemark.edges
    const posts = allEdges.filter(
      edge => edge.node.fields.collection === `blog`
    );
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/blog/${post.node.frontmatter.slug}`,
        component: postTemplate,
        context: {
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })
    const projects = allEdges.filter(
      edge => edge.node.fields.collection === `work`
    );
    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: `/work/${project.node.frontmatter.slug}`,
        component: projectTemplate,
        context: {
          slug: project.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName
    })
  }
}
