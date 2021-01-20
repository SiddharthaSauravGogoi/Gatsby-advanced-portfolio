import React from 'react';
import { Link } from 'gatsby';

const Post = ({ title, author, path, date, body }) => {
  return (
    <div className="post">
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
