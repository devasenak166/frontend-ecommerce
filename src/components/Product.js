import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Offers from "./Offers";
import Navbar from "./Navbar";
import Email from "./Email";
import Footer from "./Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
 
  const [Product, setProduct] = useState([]);
  
  let { id } = useParams();
  console.log(id);
 const [cart,setCart]=useState([]);
const handleCart=async ()=>{
  const token = localStorage.getItem("accessToken");
  const userId=localStorage.getItem("userId")
  if (!token) {
    alert("Please login or register to add items to your cart.");
    return;
  }

  try {
    const res=await axios.post(`https://impossible-eel-helmet.cyclic.cloud/create`, {
      userId:userId,
      productId: Product._id, 
      quantity: quantity, 
     },
     );

    console.log(res.data)
    alert("Added to cart");
    window.location.href='/Cart'
  }
  catch(err){
    console.log(err)
  }


}
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://impossible-eel-helmet.cyclic.cloud/products/${id}`);
        console.log(res.data.product);

        setProduct(res.data.product);
      } catch (err) {}
    };
    getProduct();
  }, []);

  return (
    <>
      <Offers />
      <Navbar />
      {Product ? (
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                class="rounded-lg-3 img-fluid"
                src={Product.img}
                alt=""
                width="720"
              />
            </div>
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-light lh-1 text-body-emphasis">
                {Product.title}
              </h1>
              <p class="lead">{Product.desc}</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <div
                  class="btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    class="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button type="button" class="btn btn-outline-success" onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                  <div
                    class="btn-group me-2 "
                    role="group"
                    aria-label="Second group"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                     {quantity}
                    </button>
                  </div>
                  <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-danger " onClick={handleDecrement }>
                      -
                    </button>
                  </div>
                </div>
              
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
              
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-md px-4" onClick={handleCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Email />
      <Footer />
    </>
  );
};

export default Product;
