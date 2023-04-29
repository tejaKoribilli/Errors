// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      author: each.author,
      authorUrl: each.avatar_url,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))

    this.setState({blogList: updatedData, isLoading: false})
  }

  renderBlogItemData = () => {
    const {blogList} = this.state
    return (
      <>
        {blogList.map(eachBlog => (
          <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
        ))}
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-list-container">
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

export default BlogList
