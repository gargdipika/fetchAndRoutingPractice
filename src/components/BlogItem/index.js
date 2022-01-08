// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = itemDetails

  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <li className="details-container">
        <img className="blog-image-style" alt={imageUrl} src={imageUrl} />
        <div>
          <p className="blog-topic">{topic}</p>
          <h1 className="title-style">{title}</h1>
          <div className="author-detail">
            <img className="avatar-image" alt={avatarUrl} src={avatarUrl} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
