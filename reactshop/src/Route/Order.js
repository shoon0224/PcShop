import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const Order = () => {
    return (
        <div>
            {
                !logged && <Redirect to="./Login" />
            }
        </div>
    );
};

export default Order;