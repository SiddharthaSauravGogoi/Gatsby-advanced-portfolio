import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunctions';
import { DiscussionEmbed } from 'disqus-react';

export default function SinglePost({ data, pageContext }) {


  const post = data.markdownRemark.frontmatter;

  const disqusAlias = `Siddhartha`;

  const discusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: `https://siddharthasauravgogoi.in/${pageContext.slug}`
  }


  return (
    <Layout>
      <main>
        <SEO title={post.title} />
        <h1> {post.title} </h1>
        <div className="post">
          <Img fluid={post.image.childImageSharp.fluid} />
          <div className="post-desc">
            <div className="post-detail">
              <div>{post.date}</div>
              <div className="author">&nbsp; by &nbsp; {post.author}</div>
            </div>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <div className="post-overview-wrapper">
              <ul className="tags-list">
                {post.tags.map(tag => <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`} className="tag"> {tag} </Link>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
        <DiscussionEmbed shortname={disqusAlias} config={discusConfig} />

      </main>

      <Sidebar />


    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug } }){
      id
      html
      frontmatter{
        title
        author
        date(formatString: "MMM DD YYYY")
        tags
        image{
          childImageSharp{
            fluid(maxWidth:700){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      fields{
        slug
      }
    }
  }
`

  // export const postQuery = graphql`
  // query($slug: String!) {
  //   markdownRemark(fields: { slug: { eq: $slug } }) {
  //     html
  //     frontmatter {
  //       title
  //     }
  //   }
  // }
