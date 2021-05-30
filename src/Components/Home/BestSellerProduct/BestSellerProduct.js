import React, { useEffect, useState } from "react";
// import "./BestSellerProduct.scss";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  addToCart,
  getDataFromLocalStorage,
} from "../../../redux/actions/CartAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";


SwiperCore.use([Pagination, Navigation]);

const BestSellerProduct = () => {
  const allProducts = useSelector((state) => {
    return state.cart.fakeData;
  });
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getDataFromLocalStorage());
  }, []);

  return (
    <div style={{}} className="p-sm-2">
      <h2>BEST SELLER PRODUCTS</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper row"
      >
          
        {allProducts.slice(5,9).map((item) => (
          <SwiperSlide className=" col-md-4 ">
            <div class="">
              <Card style={{ width: "100%" }}>
                <Card.Img className='p-3' variant="top" src={item.img} />

                <Card.Body>
                  <Card.Title>{item.title}...</Card.Title>
                  <h3>
                    <b>Price: ${item.price}</b>
                  </h3>
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                  <div>
                    <button
                      onClick={() => Dispatch(addToCart(item))}
                      className="btn btn-outline-dark"
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                      Buy Now{" "}
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerProduct;