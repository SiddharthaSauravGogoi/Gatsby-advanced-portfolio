import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post";
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>

      <StaticQuery query={indexQuery} render={data => {
        return (
          <>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags} />))}
          </>
        )
      }} />
    </main>

    <aside>
      aloha
    </aside>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM DD YYYY")
          author
          path
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
