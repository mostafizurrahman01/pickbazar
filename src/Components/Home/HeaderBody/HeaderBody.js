import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HeaderBody.css';



function HeaderBody() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2> 3Rd Part </h2>

            <Slider {...settings}>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <image src="https://i.imgur.com/1nS4irq.png"></image>
                        </div>
                    </div>
                </div>
                <div>
                    <image src="https://i.imgur.com/1nS4irq.png"></image>
                </div>
                <div>
                    <image src="https://i.imgur.com/1nS4irq.png"></image>
                </div>
                {/* <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div> */}
            </Slider>
        </div>
    );
};


export default HeaderBody;


// import * as React from "react";
// import { useEffect, useState, useRef } from "react";
// import Slider from "react-slick";
// // import "./styles.css";

// const HeaderBody = () => {
//     const [nav1, setNav1] = useState();
//     const [nav2, setNav2] = useState();
//     const slider1 = useRef();
//     const slider2 = useRef();

//     // i dont seem to need this
//     //useEffect(() => {
//     //    setNav1(sliderEl1);
//     //    setNav2(sliderEl2);
//     //  }, []);

//     return (
//         <div style={{ padding: "0 30px", background: "#ccc" }}>
//             {/* <Slider
//         className="mainSlider"
//         asNavFor={nav2}
//         ref={slider1 => setNav2(slider1)}
//       >
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider> */}

//             <Slider
//                 asNavFor={nav1}
//                 ref={slider2 => setNav2(slider2)}
//                 slidesToShow={3}
//                 swipeToSlide={true}
//                 focusOnSelect={true}
//             >
//                 <div>
//                     <image src="https://i.imgur.com/1nS4irq.png"></image>
//                 </div>
//                 <div>
//                     <image src="https://i.imgur.com/1nS4irq.png"></image>
//                 </div>
//                 <div>
//                     <image src="https://i.imgur.com/1nS4irq.png"></image>
//                 </div>
//                 <div>
//                     <image src="https://i.imgur.com/1nS4irq.png"></image>
//                 </div>
//                 {/* <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div> */}
//             </Slider>
//         </div>
//     );
// };

// export default HeaderBody;


// import React from "react";
// // import "./styles.css";
// import './HeaderBody.css';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// export default function HeaderBody() {
//   const renderSlides = () =>
//     [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
//       <div>
//         <h3>Slide {num}</h3>
//       </div>
//     ));

//   return (
//     <div className="App">
//       <Slider
//         dots={false}
//         slidesToShow={2}
//         slidesToScroll={2}
//         autoplay={true}
//         autoplaySpeed={3000}
//       >
//         {renderSlides()}
//       </Slider>
//     </div>
//   );
// }

