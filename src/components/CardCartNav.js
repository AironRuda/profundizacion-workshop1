import trash from '../assets/trash.svg'
import '../styles/cart-modal.scss'

const CardCartNav = () => {
  return (
    <article className='cart-modal'>
      <h3>Cart</h3>
      <section>
        <img className='main-img' src='https://andscape.com/wp-content/uploads/2019/12/edit-good-kid-Art-Print-POSTER-Kendrick-Lamar-good-kid-m-A-A-d-city-Hip-Hop-Album-Cover.jpg' alt="Kendrick"/>
        <span className='price'>precio</span>
        <span className='amount'>x cantidad</span>
        <span className='total'>total</span>
        <img src={trash} alt='trash icon'/>
      </section>
    </article>
  )
}

export default CardCartNav
