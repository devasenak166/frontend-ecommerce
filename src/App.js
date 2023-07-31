import Home from "../src/components/Home";
import Product from "../src/components/Product";
import Cart from "../src/components/Cart";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import CheckOut from "../src/components/CheckOut";
import Success from "../src/components/Success";
import Categories from "../src/components/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
