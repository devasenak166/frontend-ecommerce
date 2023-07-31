import React from "react";
import {Link} from 'react-router-dom'
import "../App.css";
const Slider = () => {
  const handleShop = (e) => {
    e.preventDefault();
    console.log("hi")
    window.location.href = "/categories";
    
  };
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item active"
            style={{ backgroundColor: "#f5fafd" }}
          >
            <div class="row align-items-center ">
              <div class="col-lg-6">
                <img
                  src="https://res.cloudinary.com/dv7dm2knk/image/upload/v1663665361/imgbin-fur-clothing-woman-winter-others-fY4xXRReaPkqKSJFaf80HZFxN-removebg-preview_1_lfk34o.png"
                  class="img-fluid"
                  height="640px"
                  width="590px"
                />
              </div>
              <div class="col-lg-6">
                <div
                  class="carousel-caption d-lg-none d-md-none"
                  style={{ textAlign: "center" }}
                >
                  <h1 style={{ fontSize: "70px" }}>SUMMER SALE</h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "3px",
                    }}
                  >
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    onClick={handleShop}
                  >
                    Shop Now
                  </button>
                </div>
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                    transform: "translateY(-25%)",
                  }}
                >
                  <h1 style={{ fontSize: "70px" }}>SUMMER SALE</h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "3px",
                    }}
                  >
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <button type="button" class="btn btn-outline-secondary" onClick={handleShop}>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item " style={{ backgroundColor: "#f5fafd" }}>
            <div class="row align-items-center ">
              <div class="col-lg-6">
                <img
                  src="https://i.ibb.co/DG69bQ4/2.png"
                  class="img-fluid"
                  height="640px"
                  width="590px"
                />
              </div>
              <div class="col-lg-6">
                <div
                  class="carousel-caption d-lg-none d-md-none"
                  style={{ textAlign: "center" }}
                >
                  <h1 style={{ fontSize: "70px" }}>SUMMER SALE</h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "3px",
                    }}
                  >
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Shop Now
                  </button>
                </div>
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                    transform: "translateY(-25%)",
                  }}
                >
                  <h1 style={{ fontSize: "70px" }}>SUMMER SALE</h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "3px",
                    }}
                  >
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item " style={{ backgroundColor: "#f5fafd" }}>
            <div class="row align-items-center ">
              <div class="col-lg-6">
                <img
                  src="https://i.ibb.co/cXFnLLV/3.png"
                  class="img-fluid"
                  height="640px"
                  width="590px"
                />
              </div>
              <div class="col-lg-6">
                <div
                  class="carousel-caption d-lg-none d-md-none"
                  style={{ textAlign: "center" }}
                >
                  <h1 style={{ fontSize: "70px" }}>SUMMER SALE</h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "3px",
                    }}
                  >
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Shop Now
                  </button>
                </div>
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                    transform: "translateY(-25%)",
                  }}
                >
                  <h1 style={{ fontSize: "70px" }}>SUMMER SALE</h1>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      letterSpacing: "3px",
                    }}
                  >
                    DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
                    ARRIVALS.
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
