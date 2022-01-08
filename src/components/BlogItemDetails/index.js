// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetail: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      content: data.content,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }
    console.log(updatedData)
    this.setState({blogItemDetail: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogItemDetail} = this.state
    const {title, content, imageUrl, avatarUrl, author} = blogItemDetail

    return (
      <div className="blog-item-container-style">
        <h1>{title}</h1>
        <div className="container">
          <img className="avatar-image" alt="profile" src={avatarUrl} />
          <p>{author}</p>
        </div>
        <img className="blog-image-style-2" alt={title} src={imageUrl} />
        <p className="description-blog">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
