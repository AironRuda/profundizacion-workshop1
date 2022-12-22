import { useState, createContext } from "react";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import NavBarComponent from "./components/NavBarComponent";

const selectView = (_view, _id) => {
  switch (_view) {
    case "products":
      return <Products />;
    case "detail":
      return <ProductCard id={_id} />;
    default:
      break;
  }
};

export const context = createContext(null);

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);
  const [idDetail, setIdDetail] = useState(0);
  const [filter, setFilter] = useState(null)

  return (
    <>
      <context.Provider value={{ setView, cart, setCart, setIdDetail, filter, setFilter }}>
        <NavBarComponent />
        {selectView(view, idDetail)}
      </context.Provider>
    </>
  );
}

export default App;
