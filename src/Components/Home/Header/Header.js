import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderBody from '../HeaderBody/HeaderBody';
import Search from '../Search/Search';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Search></Search> */}
            <HeaderMain></HeaderMain>
            <HeaderBody></HeaderBody>
        
        </div>
    );
};

export default Header;