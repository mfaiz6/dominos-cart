import './cart.css'

const Cart = ({ cart }) => {

  if (!cart) {
    return null
  }



  return (
    <div className="cartContainer" id="cartId">

      <div className="cartSections">
        <div className="cartHead">

          <div className="cartItemContainer">

            <div className="cartItemHead">
              <div className="itemImage">
                <img src="https://images.dominos.co.in/new_margherita_2502.jpg" alt="" />
              </div>
              <div className="itemText">
                <h4>Margherita</h4>
                <p>Classic delight with 100% real mozzarella cheese</p>
              </div>
            </div>

            <div className='cartItemFoot'>

              <div className="itemDetail">
                <div className="itemQuantity">
                  <span className='quantityMinus quantityBox'>-</span>
                  <span className='quantityBox'>2</span>
                  <span className='quantityPlus quantityBox'>+</span>
                </div>
                <div className="itemPrice">
                  <h5>₹ 239.00</h5>
                </div>

              </div>

            </div>


          </div>

          <div className="cartItemContainer">

            <div className="cartItemHead">
              <div className="itemImage">
                <img src="https://images.dominos.co.in/new_margherita_2502.jpg" alt="" />
              </div>
              <div className="itemText">
                <h4>Margherita</h4>
                <p>Classic delight with 100% real mozzarella cheese</p>
              </div>
            </div>

            <div className='cartItemFoot'>

              <div className="itemDetail">
                <div className="itemQuantity">
                  <span className='quantityMinus quantityBox'>-</span>
                  <span className='quantityBox'>2</span>
                  <span className='quantityPlus quantityBox'>+</span>
                </div>
                <div className="itemPrice">
                  <h5>₹ 239.00</h5>
                </div>

              </div>

            </div>


          </div>

          <div className="cartItemContainer">

            <div className="cartItemHead">
              <div className="itemImage">
                <img src="https://images.dominos.co.in/new_margherita_2502.jpg" alt="" />
              </div>
              <div className="itemText">
                <h4>Margherita</h4>
                <p>Classic delight with 100% real mozzarella cheese</p>
              </div>
            </div>

            <div className='cartItemFoot'>

              <div className="itemDetail">
                <div className="itemQuantity">
                  <span className='quantityMinus quantityBox'>-</span>
                  <span className='quantityBox'>2</span>
                  <span className='quantityPlus quantityBox'>+</span>
                </div>
                <div className="itemPrice">
                  <h5>₹ 239.00</h5>
                </div>

              </div>

            </div>


          </div>

          <div className="cartItemContainer">

            <div className="cartItemHead">
              <div className="itemImage">
                <img src="https://images.dominos.co.in/new_margherita_2502.jpg" alt="" />
              </div>
              <div className="itemText">
                <h4>Margherita</h4>
                <p>Classic delight with 100% real mozzarella cheese</p>
              </div>
            </div>

            <div className='cartItemFoot'>

              <div className="itemDetail">
                <div className="itemQuantity">
                  <span className='quantityMinus quantityBox'>-</span>
                  <span className='quantityBox'>2</span>
                  <span className='quantityPlus quantityBox'>+</span>
                </div>
                <div className="itemPrice">
                  <h5>₹ 239.00</h5>
                </div>

              </div>

            </div>


          </div>


        </div>

        <div className="cartFoot">

          <div className="cartTotalPrice">
            <h5>Subtotal</h5>
            <h5>₹ 239.00</h5>
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