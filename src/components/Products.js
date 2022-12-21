import CardComponent from "./CardComponent"
import '../styles/products.scss'

const Products = () => {

  return (
    <main className='container-fluid p-1'>
      <h1 className='text-center my-5'>PRODUCTS</h1>
      <section className="d-flex flex-wrap gap-3 justify-content-center my-5">
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </section>
    </main>
  )
}

export default Products
