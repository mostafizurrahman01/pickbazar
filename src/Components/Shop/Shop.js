import React, { useEffect } from 'react';
import Fakedata from '../../Fakedata/Fakedata';
import Item from './Item';

const Shop = () => {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setItems(Fakedata);
    }, []);
    return (
        <div className="container row">
            {
                items.map(item => (<Item key={item.id} item={item}></Item>))
            }
        </div>
    );
};

export default Shop;