import React from 'react';
import './LayoutHeader.css';
import { Link } from 'react-router-dom';


const LayoutHeader = () => {
    return (
        <div>
        <div className="layout">
            <Link to="/Login" className="item">로그인</Link>
            <Link to="/Signup" className="item">회원가입</Link>
            <Link to="/Mypage" className="item">마이페이지</Link>
            <Link to="/Basket" className="item">장바구니</Link>
        </div>
        <div className="pc">
            <Link  to="/Contents" className="pcitem"><h1>PC</h1></Link>
        </div>
        </div>
    )
}

export default LayoutHeader;