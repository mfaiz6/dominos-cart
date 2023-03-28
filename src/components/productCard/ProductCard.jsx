import './productCard.css'
import { pizza } from '../../assets/data'

const ProductCard = () => {
  return (

    <div className="productCardContainer">

      {pizza.map((item, index) => (
        <div className="column" key={index}>
          <div className="card">
            <img src={item.image} alt={item.name} style={{ width: "100%", height:"90%" }} />
            <div className="price">
              <h6>₹ {item.price}</h6>
            </div>
            <div className="container">
              <h4><b>{item.name}</b></h4>
              <p>{item.desc}</p>
            </div>
            <div className="button">
              <button>Add to cart</button>
            </div>
            
          </div>
        </div>
      ))}

    </div>
  )
}

export default ProductCard