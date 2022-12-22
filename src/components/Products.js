import CardComponent from './CardComponent';
import '../styles/products.scss';
import { useEffect, useState } from 'react';
import { getProducts } from '../functions/request';

const Products = ({ filter = null }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <main className='container-fluid p-1'>
      <h1 className='text-center my-5'>PRODUCTS</h1>
      <section className='d-flex flex-wrap gap-3 justify-content-center my-5'>
        {products.map((product) => {
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
