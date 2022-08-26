import React from "react"
import { graphql, StaticQuery } from "gatsby"

import ProjectList from "../components/projects/projectList"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
const WorkPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Work"
        keywords={[`portfolio`, `architecture`, `projects`, `case study`]}
      />

      <article className="page-template post-content art project-content-body">
        <h1>Work</h1>
        <p>I'm a Workplace Design Consultant and Interior Architect.</p>
        <p>
          I help clients who:
          <ol>
            <li>
              Would like to stay in the current location, but the existing space
              no longer works well for them. The reasons vary - the most common
              ones are: team growth, change of branding, and the desire to
              attract new talent or investors.
            </li>
            <li>
              Need a new office. By gathering their requirements and forming a
              detailed design brief, I suggest the appropriate size space. I do
              so by considering both current size and potential future growth of
              the company, to avoid additional costs. By space-planning each
              potential building, I help the client select the most appropriate
              to meet their needs, both functionally and financially.
            </li>
          </ol>
        </p>

        <h3>Design Process</h3>

        <div className="quote">
          <blockquote>
            <p>
              "To ask the right questions is half of the solution of a problem"
            </p>
            <cite>
              <span>Carl Jung</span>
            </cite>
          </blockquote>
        </div>

        <p>
          The most crucial aspect of a successful project is asking the right
          questions to clients. <br />I make use of my organisational psychology
          background to craft bespoke materials to collect useful data. I’ve
          written Internal Staff Questionnaires, anagement Team Questionnaires
          and Evaluation Forms customised for the different types of clients, to
          create the most accurate and comprehensive design brief.
        </p>
        <p>
          I aim to use my design knowledge and experience to maximise the
          potential use of space with a focus on human-centric design and
          increasing productivity.
          <strong>
            {" "}
            Analysing individual and collective behaviours across an
            organisation is one of the key factors to achieve multifunctional,
            multicultural and timeless spaces.
          </strong>
        </p>
        <p>
          Being aware of the impact of colour and light on humans’ psychology
          and mood, I transform the identity of spaces with architectural
          trickery, coming up with cost-effective solutions to many design
          problems.
          <br />
          <strong>
            I use art as a part of the architecture, not as a simple accessory.
          </strong>
          <br />
          I can craft bespoke art pieces to translate the energy and branding of
          a company to the space.
          <br />
          <br />I believe that a significant increase in productivity can only
          be achieved by not losing the focus on happiness and mental health of
          the users of the space, and this has to carry throughout the whole
          design process.
        </p>
      </article>
      <ProjectList />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            collection
          }
          frontmatter {
            slug
            date(formatString: "MMMM DD, YYYY")
            title
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
    query={indexQuery}
    render={data => (
      <WorkPage location={props.location} props data={data} {...props} />
    )}
  />
)
