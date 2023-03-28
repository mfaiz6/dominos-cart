import './productCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'

const ProductCard = ({cart}) => {

  const items = useSelector((state) => state.allCart.items)

  const dispatch = useDispatch()

  if(cart) {
    return null
  }


  return (

    <div className="productCardContainer" id="productCardContainerId">

      {items.map((item) => (
        <div className="column" key={item.id}>
          <div className="card">
            <img src={item.image} alt={item.name} style={{ width: "100%", height:"170px", objectFit: "cover" }} />
            <div className="price">
              <h6>₹ {item.price}</h6>
            </div>
            <div className="container">
              <h4><b>{item.name}</b></h4>
              <p>{item.desc}</p>
            </div>
            <div className="button">
              <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
            </div>
            
          </div>
        </div>
      ))}

    </div>
  )
}

export default ProductCard