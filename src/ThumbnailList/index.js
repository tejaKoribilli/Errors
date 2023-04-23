import './index.css'

const ThumbnailList = props => {
  const {eachImage, onSelectImage} = props
  const {thumbnailUrl, id} = eachImage

  const onClickImage = () => {
    onSelectImage(id)
  }

  return (
    <li>
      <button type="button" className="img-btn-list">
        <img
          onClick={onClickImage}
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-list-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailList
