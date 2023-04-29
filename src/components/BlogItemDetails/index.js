// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data = await response.json()

    const updatedBlogData = {
      id: data.id,
      author: data.author,
      authorUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      content: data.content,
    }

    this.setState({blogData: updatedBlogData, isLoading: false})
  }

  renderBlogItemData = () => {
    const {blogData} = this.state
    const {author, authorUrl, imageUrl, title, content} = blogData

    return (
      <div className="blog-item-details-container">
        <h1 className="blog-item-details-title">{title}</h1>
        <div className="author-profile-container">
          <img className="blog-details-profile" src={authorUrl} alt="profile" />
          <p className="blog-details-authorName">{author}</p>
        </div>
        <img className="blog-details-image" src={imageUrl} alt={title} />
        <p className="blog-item-details-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
