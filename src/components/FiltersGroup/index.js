import {BiSearch} from 'react-icons/bi'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    selectCategoryType,
    selectRating,
    onClearingFilters,
    onInputSearchFeild,
    onSearchResult,
    searchInput,
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

  const onEnterSearch = event => {
    if (event.key === 'Enter') {
      onSearchResult()
    }
  }

  const onSearchInput = event => {
    onInputSearchFeild(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          className="serch-input"
          placeholder="Search"
          onChange={onSearchInput}
          type="search"
          onKeyDown={onEnterSearch}
          value={searchInput}
        />
        <BiSearch className="search-icon" />
      </div>
      <h1 className="filter-heading">Category</h1>
      <ul className="list-container">
        {categoryOptions.map(each => (
          <li key={each.categoryId}>
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
              alt={`rating ${eachItem.ratingId}`}
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
