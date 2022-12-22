import trash from '../assets/trash.svg';
import '../styles/cart-modal.scss';

const CardCartNav = () => {
  return (
    <article
      className='cart-modal container'
      style={{ position: 'absolute', width: '320px', userSelect: 'none' }}
    >
      <h3
        className='pb-2 mt-2'
        style={{ fontSize: '1.5rem', borderBottom: 'solid #bbb 1px' }}
      >
        Cart
      </h3>
      <section className='d-flex align-items-center gap-1'>
        <img
          className='main-img'
          src='https://andscape.com/wp-content/uploads/2019/12/edit-good-kid-Art-Print-POSTER-Kendrick-Lamar-good-kid-m-A-A-d-city-Hip-Hop-Album-Cover.jpg'
          alt='Kendrick'
        />
        <span className='price ms-2'>precio</span>
        <span className='amount'>x cantidad</span>
        <span className='total me-2'>total</span>
        <img src={trash} alt='trash icon' style={{ cursor: 'pointer' }} />
      </section>
    </article>
  );
};

export default CardCartNav;
