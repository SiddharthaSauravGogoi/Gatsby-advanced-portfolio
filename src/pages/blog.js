import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar";
import "../styles/main.css";

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <StaticQuery query={indexQuery} render={data => {
        return (
          <>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags} />))}
          </>
        )
      }} />
    </main>
    <Sidebar />
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
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`

export default BlogPage
