import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

export default function Sidebar() {
  return (
    <aside>
      <div className="sidebar-card">
        <img src="https://media-exp1.licdn.com/dms/image/C5103AQHjwQKKEz4IXA/profile-displayphoto-shrink_200_200/0/1579371137175?e=1616630400&v=beta&t=AntsP8wPgjHHeP7SRbZTVGKa6e5tJToJHIfpwH5iVKM" alt="author" />
        <p className="sidebar-card-title author"> Siddhartha Saurav Gogoi </p>
      </div>
      <div className="sidebar-card recent-posts">
        <p className="sidebar-card-title"> Recent Posts </p>
        <StaticQuery query={sidebarQuery}
          render={(data) => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="sidebar-card" key={node.id}>
                  <Link to={node.frontmatter.path} className="post-link">
                    <p> {node.frontmatter.title} </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        />

      </div>
    </aside>
  )
}

const sidebarQuery = graphql`
  query sidebarQuery{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges{
        node{
          id
          frontmatter{
            title
            path
            image{
              childImageSharp{
                fluid(maxWidth: 200){
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