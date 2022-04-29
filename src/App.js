import Header from "./containers/Header/Header";
import Products from "./containers/Products/Products";
import ProductDetails from "./containers/Products/productDetails";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header/>
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Products/>} />
             <Route path="/product/:productId" element={<ProductDetails/>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}
export default App;
