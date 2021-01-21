import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Sidebar() {

  return (
    <aside>
      <div className="sidebar-card">
        <img src="https://avatars.githubusercontent.com/u/7467425?s=460&u=62a82d8c83564343d45c68635ffc515ee097841e&v=4" alt="author" />
        <p className="sidebar-card-title author"> Siddhartha Saurav Gogoi </p>
        <div className="social-icons-wrapper">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      { window.location.pathname.length === 1 ?
        <div className="sidebar-card recent-posts">
          <p className="sidebar-card-title"> Recent Posts </p>
          <StaticQuery query={sidebarQuery}
            render={(data) => (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div className="sidebar-card" key={node.id}>
                    <Link to={node.fields.slug} className="post-link">
                      <p> {node.frontmatter.title} </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          />
        </div> : null}
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
            image{
              childImageSharp{
                fluid(maxWidth: 200){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
        }
      }
    }
  }
`