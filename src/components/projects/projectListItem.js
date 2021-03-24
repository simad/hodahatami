import React from "react"
import { Link } from "gatsby"
import ProjectInfo from "./projectInfo"

export default props => (
  <div>
    <ProjectInfo props {...props} />
  <article
    className={`project-item project-item-large ${
      props.projectClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail.childImageSharp.fluid.src
        })`,
      }
    }
  >
    <Link to={`/work/${props.node.frontmatter.slug}`} className="project-item-link">
      <div className="project-item-content">
      </div>
    </Link>
  </article>
  </div>
)
