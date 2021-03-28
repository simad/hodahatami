import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default props => (
  <div className="article">
    <Link to={`/insights/${props.node.frontmatter.slug}`} className="article-item-link">

  <div className="article-info">
    <div className="sixty">
    <h3><span className="underline-magical">{props.node.frontmatter.title}</span></h3>
    <div><i>{props.node.frontmatter.date}</i></div>
    <div className="description">{props.node.frontmatter.description}</div>
      </div>
    <div className={`forty article-item`}>
      <img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src}></img>
      
    </div>
  </div>
  </Link>
  </div>
)
