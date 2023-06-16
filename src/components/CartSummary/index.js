// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartLen = cartList.length
      let cartPrice = 0
      for (let i = 0; i < cartLen; i += 1) {
        cartPrice += cartList[i].price * cartList[i].quantity
      }

      return (
        <div className="cart-summary-container">
          <h1 className="order-total-heading">
            Order Total:{' '}
            <span className="total-cart-price">Rs {cartPrice}/-</span>
          </h1>
          <p className="items-in-cart">{cartLen} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
