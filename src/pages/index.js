import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post";
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery query={indexQuery} render={data => {
      return (
        <>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post title={node.frontmatter.title}
              author={node.frontmatter.author}
              path={node.frontmatter.path}
              date={node.frontmatter.date}
              body={node.excerpt} />))}
        </>
      )
    }} />
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
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
