import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const Basket = () => {
    return (
        <div>
             {
                !logged && <Redirect to="./Login"/>
            }
            장바구니 준비중입니다.
        </div>
    );
};

export default Basket;