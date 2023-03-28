import { useSelector, useDispatch } from 'react-redux'
import './cart.css'
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../features/cartSlice'
import { useEffect } from 'react'

const Cart = ({ cart }) => {

  const { myCart, totalPrice } = useSelector((state) => state.allCart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [myCart])


  if (!cart) {
    return null
  }



  return (
    <div className="cartContainer" id="cartId">

      <div className="cartSections">
        <div className="cartHead">

          {myCart.map((item, index) => (
            <div className="cartItemContainer" key={index}>

              <div className="cartItemHead">
                <div className="itemImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="itemText">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>

              <div className='cartItemFoot'>

                <div className="itemDetail">
                  <div className="itemQuantity">
                    <span className='quantityMinus quantityBox' onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</span>
                    <span className='quantityBox'>{item.quantity}</span>
                    <span className='quantityPlus quantityBox' onClick={() => dispatch(increaseItemQuantity(item.id))}>+</span>
                  </div>
                  <span class="material-symbols-outlined quantityBox" onClick={() => dispatch(removeItem(item.id))}>delete</span>
                  <div className="itemPrice">
                    <h5>₹ {item.price}</h5>
                  </div>

                </div>

              </div>


            </div>
          ))

          }




        </div>

        <div className="cartFoot">

          <div className="cartTotalPrice">
            <h5>Subtotal</h5>
            <h5>₹ {totalPrice}</h5>
          </div>

          <div className="cartCheckoutButton">
            <button>checkout</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart