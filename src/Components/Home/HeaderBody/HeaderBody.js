import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HeaderBody.css';
import price from './../../../images/price.jpg';
import bike2 from './../../../images/bike2.PNG';
import gift from './../../../images/gift.jpg';

function HeaderBody() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        initialSlide: 0,
        cssEase: "linear",
    }
    return (

        <Slider {...settings} className="mt-5 headerBody">
            
            <section className="row d-flex align-items-center headerBody-container container-fluid bg-primary ms-5">
                <div style={{ height: '200px' }} className="col-md-4 col-sm-12  mx-auto offset-md-1 mt-5">
                    <h5 style={{ color: '#3A4256' }}>Coupon Savings</h5>
                    <small className="title">Up to 30% off everyday essentials</small>
                    <button>Shop Coupons</button>
                </div>

                <div style={{ height: '40px' }} className="col-md-6 col-sm-12 mx-auto img-container mb-5 ">
                    <img src={price} alt="" className="img-fluid" />
                </div>

            </section>

            <section className="row d-flex align-items-center headerBody-container2 container-fluid bg-danger ms-5">
                <div style={{ height: '200px' }} className="col-md-4 col-sm-12  mx-auto offset-md-1 mt-5">
                    <h5 style={{ color: '#3A4256' }}>Free Delivery</h5>
                    <small className="title">With Selected Items</small>
                    <button>Save Now</button>
                </div>

                <div style={{ height: '50px' }} className="col-md-6 col-sm-12 mx-auto img-container2 mb-5 ">
                    <img src={bike2} alt="" className="img-fluid" />
                </div>

            </section>

            <section className="row d-flex align-items-center headerBody-container container-fluid bg-info ms-3 mb-5">
                <div style={{ height: '200px' }} className="col-md-4 col-sm-12  mx-auto offset-md-1 mt-5">
                    <h5 style={{ color: '#3A4256' }}>Gift Voucher</h5>
                    <small className="title">With Personal Care items</small>
                    <button>Shop Coupons</button>
                </div>

                <div style={{ height: '40px' }} className="col-md-6 col-sm-12 mx-auto img-container mb-5 ">
                    <img src={gift} alt="" className="img-fluid" />
                </div>

            </section>

           

        </Slider>
    );
};

export default HeaderBody;