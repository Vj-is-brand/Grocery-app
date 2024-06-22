import React from "react";
import "./../styles/heroSection.css";
import EastIcon from "@mui/icons-material/East";
const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <div className="leftContainerElements">
            <h3 className="discountText">Discount up to 20%</h3>
            <div className="grocerySection">
              <h1 className="groceryTitle">
                Buy Fresh And Organic Grocery Food
              </h1>
              {/* <img
                className="groceryImage"
                src="/asset/kiwi.jpeg"
                alt="Grocery Image"
              /> */}
            </div>
            <p className="groceryDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              earum voluptatem iure accusamus voluptates cupiditate, mollitia
              nulla.
            </p>
            <div className="shopNowSection">
              <button className="shopNowButton">
                SHOP NOW <EastIcon />
              </button>
              <div className="infoSection">
                <div className="section usersSection">
                  <span className="number">35k+</span>
                  <span className="label">Users</span>
                </div>
                <div className="separator">|</div>
                <div className="section productsSection">
                  <span className="number">18k+</span>
                  <span className="label">Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer"></div>
        <img
          src="/asset/overlayBackgound-removebg-preview.png"
          alt="foodPlatter"
          className="transparent-img"
        />
        <img
          src="/asset/mint_leaf-removebg-preview.png"
          alt=""
          className="leaf"
        />
      </div>
    </>
  );
};

export default HeroSection;
