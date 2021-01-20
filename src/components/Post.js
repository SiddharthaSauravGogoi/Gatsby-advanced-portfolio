import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, path, date, body, fluid, tags }) => {
  return (
    <div className="post">
      <Img fluid={fluid} />
      <h3>{title}</h3>
      <div className="post-detail">
        <div>{date}</div>
        &nbsp; by
        <div className="author">&nbsp; {author}</div>
      </div>
      <div className="excerpt"> {body} </div>
      <div className="post-overview-wrapper">
        <ul className="tags-list">
          {tags.map(tag => <li>
            <Link to={`/tag/${slugify(tag)}`} className="tag"> {tag} </Link>
          </li>)}
        </ul>
        <Link to={path} className="btn read-more"> Read More</Link>
      </div>

    </div>
  )
}

export default Post;
