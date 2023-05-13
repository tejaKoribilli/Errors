import {BsFilterRight} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {
    sortbyOptions,
    activeOptionId,
    onInputSearchFeild,
    onSearchResult,
  } = props

  const onClickSearch = event => {
    event.preventDefault()
    onSearchResult()
  }

  const onSearchInput = event => {
    onInputSearchFeild(event.target.value)
  }

  return (
    <div className="products-header">
      <form className="search-container" onSubmit={onClickSearch}>
        <input
          className="serch-input"
          placeholder="Search"
          onKeyUp={onSearchInput}
          type="search"
        />
        <BiSearch className="search-icon" />
      </form>

      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.sortbyOptions}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
