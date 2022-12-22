import CardComponent from "./CardComponent";
import "../styles/products.scss";
import { useEffect, useState } from "react";
import { getProducts } from "../functions/request";
import { useContext } from "react";
import { context } from "../App";

const Products = () => {
  const [productsView, setProductsView] = useState([]);

  const { filter } = useContext(context);

  useEffect(() => {
    getProducts(filter).then((res) => setProductsView(res));
  }, [filter]);

  return (
    <main className="container-fluid p-1">
      <h1 className="text-center my-5">PRODUCTS</h1>
      <section className="d-flex flex-wrap gap-3 justify-content-center my-5">
        {productsView.map((product) => {
          return (
            <CardComponent
              key={product.id}
              id={product.id}
              img={product.img[0]}
              product={product.product}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Products;
