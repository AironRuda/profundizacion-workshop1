import { useState, createContext } from "react";
import CartNav from "./components/CartNav";
import Products from "./components/Products";

const selectView = (_view) => {
  switch(_view){
    case 'products': 
      return <Products />
    case 'detail':
      return <CartNav/>
    default:
      break;
  }
}

export const context = createContext(null);

function App() {
  const [view, setView] = useState('products');
  const [cart, setCart] = useState([])
  const [idDetail, setIdDetail] = useState(0)

  return (
    <context.Provider value={{setView, cart, setCart, setIdDetail}}>
      {selectView(view)}
    </context.Provider>
  );
}

export default App;
