import React from "react";
import Offers from "./Offers";
import Navbar from "./Navbar";
import Email from "./Email";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import {} from "react";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;
const Cart = () => {
  const [CartList, setCartlist] = useState([]);
  const [stripeToken, setStripeToken] = useState();
  const navigate = useNavigate();
  const [CartId, setCartId] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await axios.get(`http://localhost:5000/carts/${userId}`);
        console.log(res.data);
        console.log(res.data.product);
        const ProductsId = res.data.product.map((product) => product.productId);
        const cartId = res.data.product.map((cart) => cart);
        console.log(cartId);
        setCartId(cartId);
        console.log(ProductsId);
        const productDetails = await Promise.all(
          ProductsId.map(async (productId) => {
            console.log(productId);
            const productRes = await axios.get(
              `http://localhost:5000/products/${productId}`
            );
            console.log(productRes.data.product);
            return productRes.data.product;
          })
        );
        console.log(productDetails);
        setCartlist(productDetails);
      } catch (err) {}
    };
    getProducts();
  }, []);

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };
 
  // useEffect(() => {
  //   const hanldeStripe = async () => {
  //     try {
  //       const res = await axios.post("http://localhost:5000/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       console.log(res.data);
  //       // window.location.href='/success'
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   // Execute hanldeStripe when stripeToken state is updated
  //   if (stripeToken && stripeToken.id) {
  //     hanldeStripe();
  //   }
  // }, [stripeToken]);


  // const hanldeStripe = async () => {
  //   try {
     
  //     const res = await axios.post("http://localhost:5000/checkout/payment", {
  //       tokenId: stripeToken.id,
  //       amount: 500,
  //     });
  //     console.log(res.data);
  //     // window.location.href='/success'
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleRemove = async (id) => {
    console.log(id);

    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);
      // const cartItem = CartId.find(
      //   (item) => item.userId === userId && item.productId === id
      // );
      // console.log(cartItem);
      // if (cartItem) {
      const response = await axios.delete(
        `http://localhost:5000/carts/${userId}/${id}`
      );
      console.log(response);

      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  //64c343cf01b6dc096a055b7e

  return (
    <>
      <Offers />
      <Navbar />
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
              alt=""
              width="72"
              height="57"
            />
            <h2>Your cart</h2>
          </div>
          <div class="py-5 text-center">
            <div class="row g-5">
              <div class="col-md-5 col-lg-12 order-md-last">
                <ul class="list-group mb-3">
                  {CartList?.map((item) => (
                    <li class="list-group-item">
                      <div>
                        <div class="row">
                          <div class="col-md-6">
                            <h4 class="my-0 mb-5">{item.title}</h4>
                            <img
                              src={item.img}
                              class="img-fluid"
                              width="200"
                              height="200"
                            />
                          </div>
                          <div class="col-md-6 ">
                            <small
                              class="text-body-secondary ms-5 mt-5 col-5 h5 position-absolute  start-50 translate-middle"
                              style={{ top: "50px" }}
                            >
                              {" "}
                              {item.desc.slice(0, 50)}
                            </small>
                            <span class="text-body-secondary h5  position-absolute top-50 start-50 translate-middle">
                              Price: {item.price}
                            </span>
                            <button
                              class="btn btn-outline-success btn-md mb-5 position-absolute bottom-0 start-50 translate-middle-x"
                              onClick={() => handleRemove(item._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div class="input-group d-flex justify-content-center">
                  {/* <button class="btn btn-success col-6 btn-lg">Total:2000 </button> */}
                </div>
                {/* <StripeCheckout
                  name="E-Commerce"
                  image="https://avatars.githubusercontent.com/u/1486366?v=4"
                  billingAddress
                  shippingAddress
                  description={`Your total is :2000`}
                  amount={2000}
                  token={onToken}
                  stripeKey={KEY}
                > */}
                  <button
                    class="btn btn-success col-6 btn-lg"
                   onClick={()=>window.location.href='/CheckOut'}
                  >
                    CHECKOUT NOW
                  </button>
                {/* </StripeCheckout> */}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default Cart;
