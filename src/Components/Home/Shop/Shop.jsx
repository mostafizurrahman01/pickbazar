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
            <div className="container row">
                <h1 className="mb-3">All Product</h1>
                {
                    allProducts.map(item => (<Item key={item.id} item={item}></Item>))
                }
            </div>
    );
};

export default Shop;