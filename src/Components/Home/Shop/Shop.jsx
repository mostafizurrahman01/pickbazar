import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Fakedata from '../../../Fakedata/Fakedata';
import Item from './Item';

const Shop = () => {

    const allProducts = useSelector((state) => {
        return state.cart.fakeData;
    });

    // const [items, setItems] = React.useState([]);

    // useEffect(() => {
    //     setItems(Fakedata);
    // }, []);

    return (
        <div style={{backgroundColor: 'ghostwhite'}}>
            <div>
                <h1 className="mb-5 mt-5 text-center">All Fetured Product</h1>
            </div>
            <div className="container row shop-container ms-5 mt-4">
                {
                    allProducts.map(item => (<Item key={item.id} item={item}></Item>))
                }
            </div>

        </div>
    );
};

export default Shop;