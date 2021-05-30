import React, { useState } from 'react';
import book1 from './../../../images/book1.jpg';
import book3 from './../../../images/book3.jpg';
import { Carousel } from 'react-bootstrap';
import './HeaderMain.css';

const HeaderMain = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <main >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={book1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={book3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </main>
    );
};

export default HeaderMain;