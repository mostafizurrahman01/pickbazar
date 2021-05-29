import React, { useState } from 'react';
import Fakedata from '../../../Fakedata/Fakedata';
import './Search.css';

const Search = () => {

    const [searchItem, setSearchItem] = useState('')

    return (
        <div className="search-container">
            <input type="text" placeholder="Search" onChange={event => {setSearchItem(event.target.value)}}>
            </input>

            {Fakedata.map((value, id) => {
                return (
                    <div className="user" id={id}>
                        <p>{value.title}</p>

                    </div>
                )
            })}
        </div>
    );
};

export default Search;