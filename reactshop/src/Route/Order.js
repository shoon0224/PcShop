import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = true;

const Order = () => {
    return (
        <div style={{ float: 'left', width: '67%', marginLeft: '2%' }}>
            {
                !logged && <Redirect to="./Login" />
            }
            <div>
                <div style={{ float: 'left', width: '100%' }}><h2>주문상품 정보</h2></div>
            </div>
            <div style={{ float: 'left', width: '55%' }}>

                <div><img style={{ float: 'left', border: '1px solid gray', width: '150px', height: '150px', borderRadius: '5px' }} src="http://s-me.kr/data/item/1801025119/thumb-1801025119_300x300.jpg" alt="주문이미지"/></div>
                <div style={{ float: 'left', border: '1px solid gray', height: '150px', width: '65%', borderRadius: '5px' }}>
                    <div>주문상품 이름 : </div><br/><br/>
                    <div>수량 : </div><br/><br/>
                    <div>가격 : </div>
                </div>
                <div style={{ float: 'left', width: '100%', height:'80px' }}>
                    <h1 style={{ marginTop: '40px' }}>주문자</h1>
                </div>
                <div style={{float:'left', width:'100%'}}><h3>이상훈</h3></div>
                <div style={{ float: 'left', width: '100%', height:'80px' }}>
                    <h1 style={{ marginTop: '40px' }}>배송지</h1>
                    
                </div>
                <div style={{float:'left', width:'100%'}}><h3>이상훈</h3></div>
                <div style={{float:'left', width:'83%'}}><h3>부산광역시 북구 화명신도시로 70, 코오롱하늘채 1차 아파트 103동 204호</h3></div>
            </div>
            <div style={{ float: 'left', width: '45%' }}>
                <div style={{ float: 'left', border: '1px solid gray', width: '100%', height: '100px', borderRadius: '5px' }}>
                    <div>상품금액</div><br /><br />
                    <div>배송비 </div>
                </div>
                <div style={{ float: 'left', width: '40%' }}>
                    <h1 style={{ marginTop: '20px'}}>최종 결제금액</h1>
                </div>
                <div style={{float:'left',width:'60%',textAlign:'right'}}><h1 style={{ marginTop: '20px'}}>원</h1></div>
                <div style={{ float: 'left', width: '100%', marginTop:'120px'}}>
                    <h1>결제 수단</h1>
                </div>
                <div style={{float:'left',textAlign:'center', marginTop:'50px', width:'100%'}}>
                    <button style={{textAlign:'center', width:'80%',height:'70px',backgroundColor:'black',borderRadius:'10px',border:'1px solid black',fontSize:'30px',color:'white'}}>결제하기</button>
                </div>
            </div>
        </div>
    );
};

export default Order;