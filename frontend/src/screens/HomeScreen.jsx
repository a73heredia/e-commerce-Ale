import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((el) => (
          <div key={el.slug} className="product">
            <Link to={`/product/${el.slug}`}>
              <img src={el.image} alt={el.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${el.slug}`}>
                <p>{el.name}</p>
              </Link>
              <p>
                <strong>{el.price}</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
