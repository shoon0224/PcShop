import React from 'react';
import './ForItemDetail.css'
import { Link } from 'react-router-dom'


class ForItemDetail extends React.Component {
    render() {
        return (
            <div className="DetailContainer">
                <div style={{ width: "45%", height: "450px", float: "left", marginRight: "50px" }}><img style={{ width: "100%" }} src="http://s-me.kr/data/item/1801025119/thumb-1801025119_300x300.jpg" alt="상세 이미지" /></div>
                <div><h4 style={{ float: "left", width: "35%", fontSize: "2.5rem", borderBottom: "1px solid black", margin: "10px" }}>2,000,000 원</h4></div>
                <div style={{ float: "left", width: "35%", height: "250px", border: "1px solid gray", borderRadius: "10px", margin: "10px" }}>
                    <h2 style={{ marginLeft: "10px" }}>상품이름 : Samsung Odessey</h2><br /><br />
                    <h2 style={{ marginLeft: "10px" }}>상품종류 : LapTop</h2>
                </div>
                <div>
                    <button style={{ float: "left", width: "16.5%", height: "70px", borderRadius: "10px", margin: "10px", marginTop: "30px" }}><Link to="/Basket" style={{textDecoration: "none", color:'black'}}><h1>장바구니</h1></Link></button>
                    <button style={{ float: "left", width: "16.5%", height: "70px", borderRadius: "10px", margin: "10px", marginTop: "30px", backgroundColor: "black" }}><Link to="/Order" style={{textDecoration: "none", color:'black'}}><h1 style={{ color: "white" }}>구매하기</h1></Link></button>
                </div>
                <div style={{ float: "left", width: "88%", borderBottom: "1px solid black", marginTop: "50px", marginBottom: "10%" }}>
                    <button style={{ float: "left", width: "45%", height: "70px", marginRight: "10%", backgroundColor:'black' }}><Link to="/ItemDetail" style={{textDecoration: "none", color:'black'}}><h1 style={{color:'white'}}>상세설명</h1></Link></button>
                    <button style={{ float: "left", width: "45%", height: "70px" }}><Link to="/ReviewDetail" style={{textDecoration: "none", color:'black'}}><h1>상품후기</h1></Link></button>
                </div>
                    <div>
                        <img src="http://iws.danawa.com/prod_img/500000/145/528/desc/prod_8528145/add_1/20190708163952459_3MHDT7B1.jpg" alt="상품설명이미지1"/>
                        <img src="http://iws.danawa.com/prod_img/500000/927/128/desc/prod_6128927/add_1/20180517120855405_4W0RU8CE.jpg" alt="상품설명이미지"/>
                    </div>
            </div>
        )
    }
}


export default ForItemDetail;