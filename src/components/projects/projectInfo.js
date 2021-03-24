import React from "react"
import "./projectList.css"

const ProjectInfo = props => {
  return (
    <div className="project">
      <div className="project-info">
      <div className="half spec">
        <div>Client: <span className="underline-magical">{props.node.frontmatter.client_name}</span></div>
        <div>Location: <span className="underline-magical">{props.node.frontmatter.location}</span></div>
        <div>Size: <span className="underline-magical">{props.node.frontmatter.size}</span></div>
      </div>
    <div className="description half">{props.node.frontmatter.description}</div>
    </div>
    </div>
  )
}

export default ProjectInfo
