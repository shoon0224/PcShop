import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const Mypage = () => {
    return (
        <div>
            {
                !logged && <Redirect to="./Login"/>
            }
            마이페이지 준비중입니다.
        </div>
    );
};

export default Mypage;