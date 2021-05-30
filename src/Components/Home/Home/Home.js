import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BestSellerProduct from '../BestSellerProduct/BestSellerProduct';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Shop from '../Shop/Shop.jsx';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <BestSellerProduct></BestSellerProduct>
            <Shop></Shop>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;