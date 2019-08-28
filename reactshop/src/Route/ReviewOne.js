import React from 'react'

class ReviewOne extends React.Component {
    render() {
        return (
            <div>
                <div style={{ float: 'left', width: '55%', marginLeft: '5%', borderTop: '1px solid black', padding: '20px' }}>
                    <div>
                        <h4 style={{ width: '10%', float: 'left' }}>제목</h4>
                    </div>
                    <div>
                        <p style={{ float: 'left', border: '1px solid black', width: '80%', height: '15px', borderRadius: '6px', padding: '5px' }}>배송빠릅니다</p>
                    </div>
                </div>
                <div style={{ float: 'left', width: '55%', marginLeft: '5%', paddingLeft:'20px'}}>
                    <div>
                        <h4 style={{ width: '10%', float: 'left' }}>작성자</h4>
                    </div>
                    <div>
                        <p style={{ float: 'left', border: '1px solid black', width: '80%', height: '15px', borderRadius: '6px', padding: '5px' }}>이상훈</p>
                    </div>
                </div>
                <div style={{ float: 'left', width: '55%', marginLeft: '5%', paddingLeft:'20px'}}>
                    <div>
                        <h4 style={{ width: '10%', float: 'left' }}>후기상품</h4>
                    </div>
                    <div>
                        <p style={{ float: 'left', border: '1px solid black', width: '80%', height: '15px', borderRadius: '6px', padding: '5px' }}>Samsung Odessey</p>
                    </div>
                </div>
                <div style={{float:'left',marginLeft:'6.5%',marginTop:'20px',width:'50.3%',height:'150px',border:'1px solid black', borderRadius:'6px'}}>
                    후기내용~~~
                </div>
                <div>
                    <img style={{width:'23%',float:'left', marginTop:'100px',border:"1px solid black",marginRight:'5px'}} src="https://dnvefa72aowie.cloudfront.net/origin/article/201901/f294e1f27f3627493fffde0fbadc6dc8f45633c2cdc5f2aa82cdfa2b0b3a76bd.jpg?q=82&s=300x300&t=crop"/>
                </div>
                <div>
                    <img style={{width:'23%',float:'left', marginTop:'100px',border:"1px solid black", marginRight:'5px'}} src="https://dnvefa72aowie.cloudfront.net/origin/article/201903/7adb852ae02736b7fb95afdd62e5f63c0101b89ba163210a74e3b9513d6487e3.jpg?q=82&s=300x300&t=crop"/>
                </div>
                <div>
                    <img style={{width:'23%',float:'left', marginTop:'100px',border:"1px solid black"}} src="https://dnvefa72aowie.cloudfront.net/origin/article/201902/A2AF68E9ABB7CE099D85FBDC0E933BB05BDE6D5F080BD6E0BF078267B32560E9.jpg?q=82&s=300x300&t=crop"/>
                </div>
            </div>
        );
    }
}
export default ReviewOne;