import React from 'react';
import './ForItemDetail.css'
import { Route, Link } from 'react-router-dom'


class Review extends React.Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdimg: 'http://s-me.kr/data/item/1801025119/thumb-1801025119_300x300.jpg',
                brdtitle: 'Samsung Odessey',
                brdcoment: '잘쓰겠습니다.',
                brdwho: "이상훈"
            },
            {
                brdno: 2,
                brdimg: 'http://image.auction.co.kr/itemimage/19/88/92/1988922483.jpg',
                brdtitle: 'Samsung Odessey',
                brdcoment: '가성비 별로',
                brdwho: "박상훈"
            },
            {
                brdno: 3,
                brdimg: 'http://image.auction.co.kr/itemimage/18/e8/e0/18e8e0a5f3.jpg',
                brdtitle: 'Samsung Odessey',
                brdcoment: '사지마셈',
                brdwho: "최상훈"
            },
            {
                brdno: 4,
                brdimg: 'https://dnvefa72aowie.cloudfront.net/origin/article/201901/f294e1f27f3627493fffde0fbadc6dc8f45633c2cdc5f2aa82cdfa2b0b3a76bd.jpg?q=82&s=300x300&t=crop',
                brdtitle: 'Samsung Odessey',
                brdcoment: '너무비싸요',
                brdwho: "임상훈"
            },
            {
                brdno: 5,
                brdimg: 'https://dnvefa72aowie.cloudfront.net/origin/article/201903/7adb852ae02736b7fb95afdd62e5f63c0101b89ba163210a74e3b9513d6487e3.jpg?q=82&s=300x300&t=crop',
                brdtitle: 'Samsung Odessey',
                brdcoment: 'HP 오멘이 더나은',
                brdwho: "김상훈"
            },
            {
                brdno: 6,
                brdimg: 'https://dnvefa72aowie.cloudfront.net/origin/article/201902/A2AF68E9ABB7CE099D85FBDC0E933BB05BDE6D5F080BD6E0BF078267B32560E9.jpg?q=82&s=300x300&t=crop',
                brdtitle: 'Samsung Odessey',
                brdcoment: '차라리맥북을산다',
                brdwho: "리상훈"
            },
            {
                brdno: 7,
                brdimg: 'https://dnvefa72aowie.cloudfront.net/origin/article/201901/19edeeef88bb817af39f968b4ad777196bcfc0819015d24d974b1489ae38fc96.jpg?q=82&s=300x300&t=crop',
                brdtitle: 'Samsung Odessey',
                brdcoment: '이돈으로 중고차삼',
                brdwho: "상상훈"
            },
            {
                brdno: 8,
                brdimg: 'https://dnvefa72aowie.cloudfront.net/origin/article/201904/d95ac4fe970ac9e6736f048e9521ca83f65246433ebfa9b33a90cfa1c8824503.jpg?q=82&s=300x300&t=crop',
                brdtitle: 'Samsung Odessey',
                brdcoment: 'MSI추천',
                brdwho: "훈상훈"
            },

        ]
    }
    render() {
        const { boards } = this.state;
        

        return (
            <div className="DetailContainer">
                <div style={{ width: "45%", height: "450px", float: "left", marginRight: "50px" }}><img style={{ width: "100%" }} src="http://s-me.kr/data/item/1801025119/thumb-1801025119_300x300.jpg" /></div>
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
                    <button style={{ float: "left", width: "45%", height: "70px", marginRight: "10%" }}><Link to="/ItemDetail" style={{ textDecoration: "none", color: 'black' }}><h1>상세설명</h1></Link></button>
                    <button style={{ float: "left", width: "45%", height: "70px",backgroundColor:'black' }}><Link to="/ReviewDetail" style={{ textDecoration: "none", color: 'black' }}><h1 style={{color:'white'}}>상품후기</h1></Link></button>
                </div>
                <div>
                    <table style={{ float: 'left', width: '88%', borderTop: '1px solid black', borderBottom: '1px solid black' }}>
                        <tbody >
                            <tr align="center">
                                <td width='13%'>번호</td>
                                <td width="15%">후기</td>
                                <td></td>
                                <td></td>
                                <td>작성자</td>
                            </tr>
                            { boards.map(row => (<BoardItem key={row.brdno} row={row} />) ) }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

class BoardItem extends React.Component {
    render() {
        return (
            <tr>
            <td style={{width:"10%", textAlign:'center',borderBottom:'1px solid black'}}>{this.props.row.brdno}</td>
            <Link to='ReviewOne'><td><img style={{width:'70px', height:'70px'}} src={this.props.row.brdimg}/></td></Link>
            <td style={{width:"30%",borderBottom:'1px solid black'}}><h3>상품이름 :</h3> {this.props.row.brdtitle}</td>
            <td style={{borderBottom:'1px solid black'}}>상품 후기 : {this.props.row.brdcoment}</td>
            <td style={{width:'10%',borderBottom:'1px solid black',textAlign:'center'}}>{this.props.row.brdwho}</td>
        </tr>
        );
    }
}

export default Review;