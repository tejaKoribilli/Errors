import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    selectCategoryType,
    selectRating,
    onClearingFilters,
  } = props

  const onSelectCategory = event => {
    selectCategoryType(event.target.textContent)
  }

  const onSelectRating = event => {
    selectRating(event.target.getAttribute('src'))
  }

  const clearFilters = () => {
    onClearingFilters()
  }

  return (
    <div className="filters-group-container">
      <h1 className="filter-heading">Category</h1>
      <ul className="list-container">
        {categoryOptions.map(each => (
          <li key={each.id}>
            <p className="category-name" onClick={onSelectCategory}>
              {each.name}
            </p>
          </li>
        ))}
      </ul>
      <h1 className="filter-heading">Rating</h1>
      <ul className="list-container">
        {ratingsList.map(eachItem => (
          <li key={eachItem.ratingId}>
            <img
              className="rating-img"
              src={eachItem.imageUrl}
              alt="rating"
              onClick={onSelectRating}
            />
          </li>
        ))}
      </ul>
      <button type="button" className="clear-filter-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
