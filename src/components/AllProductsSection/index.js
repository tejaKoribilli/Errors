import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const ApiStatusContants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class AllProductsSection extends Component {
  state = {
    productsList: [],
    activeOptionId: sortbyOptions[0].optionId,
    categoryType: '',
    ratingId: '',
    searchInput: '',
    apiStatus: ApiStatusContants.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: ApiStatusContants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {activeOptionId, categoryType, ratingId, searchInput} = this.state

    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${categoryType}&title_search=${searchInput}&rating=${ratingId}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: ApiStatusContants.success,
      })
    } else {
      this.setState({apiStatus: ApiStatusContants.failure})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  selectCategoryType = value => {
    const item = categoryOptions.filter(each => each.name === value)

    this.setState({categoryType: item[0].categoryId}, this.getProducts)
  }

  selectRating = srcValue => {
    const imgSrc = ratingsList.filter(eachImg => eachImg.imageUrl === srcValue)

    this.setState({ratingId: imgSrc[0].ratingId}, this.getProducts)
  }

  onClearingFilters = () => {
    this.setState(
      {
        activeOptionId: sortbyOptions[0].optionId,
        categoryType: '',
        ratingId: '',
        searchInput: '',
        apiStatus: ApiStatusContants.initial,
      },
      this.getProducts,
    )
  }

  onInputSearchFeild = searchInput => {
    this.setState({searchInput})
  }

  onSearchResult = () => {
    this.getProducts()
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state
    const shouldShowProductsList = productsList.length > 0

    // TODO: Add No Products View
    return shouldShowProductsList ? (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      this.renderNoProducts()
    )
  }

  renderSwitchCase = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case ApiStatusContants.inProgress:
        return this.renderLoader()

      case ApiStatusContants.success:
        return this.renderProductsList()

      case ApiStatusContants.failure:
        return this.renderFailure()
      case ApiStatusContants.initial:
        return null
      default:
        return null
    }
  }

  renderNoProducts = () => (
    <div className="no-products-view">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        alt="no products"
      />
    </div>
  )

  renderFailure = () => (
    <div className="products-loader-container">
      <img
        className="failure-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
      />
    </div>
  )

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view

  render() {
    const {searchInput} = this.state
    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}

        <FiltersGroup
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          selectCategoryType={this.selectCategoryType}
          selectRating={this.selectRating}
          onClearingFilters={this.onClearingFilters}
          onInputSearchFeild={this.onInputSearchFeild}
          searchInput={searchInput}
          onSearchResult={this.onSearchResult}
        />
        {this.renderSwitchCase()}
      </div>
    )
  }
}

export default AllProductsSection
