import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './CartPage.css'

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>YOUR CART IS EMPTY</h2>
        <p>Looks like you haven't added anything yet.<br />Go find your vibe.</p>
        <Link to="/shop" className="continue-shopping">
          EXPLORE THE SHOP
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>YOUR CART</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="size">Size: {item.size}</p>
                {item.color && (
                  <p className="color">
                    Color:{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "14px",
                        height: "14px",
                        borderRadius: "4px",
                        background: item.color === "white" ? "#fff" : item.color === "black" ? "#222" : item.color,
                        border: "1px solid #555",
                        verticalAlign: "middle",
                        marginLeft: "6px",
                        marginRight: "4px",
                      }}
                    />
                    {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
                  </p>
                )}
                <p className="price">₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                </div>
              </div>

              <div className="item-total">
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>ORDER SUMMARY</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
          <Link to="/checkout" className="checkout-btn">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
