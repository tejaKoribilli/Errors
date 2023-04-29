// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, author, authorUrl, imageUrl, title, topic} = eachBlog

  return (
    <Link to={`/blogs/${id}`} className="blog-item-container">
      <img src={imageUrl} className="blog-item-image" alt={title} />
      <div className="blog-item-details">
        <p className="blog-item-topic">{topic}</p>
        <h1 className="blog-item-title">{title}</h1>
        <div className="blog-item-author-container">
          <img
            src={authorUrl}
            className="blog-item-author-profile"
            alt="profile"
          />
          <p className="blog-item-author-name">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
