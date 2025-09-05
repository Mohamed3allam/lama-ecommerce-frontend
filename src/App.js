import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'



function App() {

  //IMPORTING IMAGES
  function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg|gif)$/));
   //----------------------------------

   const user = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home images={images}/>} />
        <Route exact path="/product/:id" element={<Product images={images}/>} />
        <Route exact path="/products/:category" element={<ProductList images={images}/>} />
        <Route exact path="/register" element={user ? <Navigate to="/"/> : <Register images={images}/>} />
        <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login images={images}/>} />
        <Route exact path="/cart" element={<Cart images={images}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
