import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
      <h1>
        Hi, my name is Siddhartha.
      </h1>
      <h1>
        I write (about) code in this blog.
      </h1>
      <Link to="/blog" >
        <button className="btn">
          Go to blog
        </button>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
