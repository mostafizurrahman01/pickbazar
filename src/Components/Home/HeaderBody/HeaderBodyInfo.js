import React from 'react';
import './HeaderBodyInfo.css';

const HeaderBodyInfo = ({ info }) => {
    return (
            <div className="col-md-4 header-body-info mr-1">
                <div className={`justify-content-center bg-${info.background}`}>
                    <img className="mt-4 px-3" src={info.icon} style={{ width: '50%' }} alt="..." />
                    <div >
                        <h5 class="card-title mt-4 px-4">{info.title}</h5>
                        <p class="card-text px-3">{info.description}</p>
                        <button className="card-text px-3 ms-4">Buy Now</button>
                    </div>
                </div>

        </div>
    );
};

export default HeaderBodyInfo;