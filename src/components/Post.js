import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Post = ({ title, author, path, date, body, fluid }) => {
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
        <Link to={path} className="btn read-more"> Read More</Link>
      </div>

    </div>
  )
}

export default Post;
