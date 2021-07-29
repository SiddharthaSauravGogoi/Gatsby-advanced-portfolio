import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <div className="post">
      <Img fluid={fluid} />
      <div className="post-desc">
        <h3>{title}</h3>
        <div className="post-detail">
          <div>{date}</div>
          &nbsp; by
          <div className="author">&nbsp; {author}</div>
        </div>
        <div className="excerpt"> {body} </div>
        <div className="post-overview-wrapper">
          <ul className="tags-list">
            {tags.map(tag => <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`} className="tag"> {tag} </Link>
            </li>)}
          </ul>
          <Link to={`/${slug}`} className="btn read-more"> Read More</Link>
        </div>
      </div>

    </div>
  )
}

export default Post;
