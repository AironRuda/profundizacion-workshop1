import "../styles/ProductCard.css";
import GetInfo from "./GetInfo.js";
import { useEffect, useState } from "react";

function ProductCard({ id }) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    GetInfo(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);
  if (product) {
    return (
      <div className="card flex-row">
        <div className="imagesField">
          <div className="principalImg">
            <button type="button" className="btn-previousImage">
              <span className="sr-only">
                <h1>L</h1>
              </span>
              <span className="icon icon-previous" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn-nextImage">
              <span className="sr-only">
                <h1>R</h1>
              </span>
              <span className="icon icon-next" aria-hidden="true"></span>
            </button>
            <img
              className="card-img-top principalImg"
              src={product.img[0]}
              id="principalImg"
              alt={product}
            />
          </div>
          <div className="secondaryImages">
            <img className="card-img-left " src={product.img[0]} alt={product}/>
            <img className="card-img-left " src={product.img[1]} alt={product}/>
            <img className="card-img-left " src={product.img[2]} alt={product}/>
            <img className="card-img-left " src={product.img[3]} alt={product}/>
          </div>
        </div>
        <div className="card-body">
          <h3>{product.company}</h3>
          <h1>{product.product}</h1>
          <p className="card-text">{product.description}</p>
          <h4 className="card-title h5 h4-sm">{product.price}</h4>
          <div className="buttons">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
                -
              </button>
              <p type="text">{product.amount}</p>
              <button type="button" className="btn btn-secondary">
                +
              </button>
            </div>
            <button type="button" className="btn btn-primary">
              add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
