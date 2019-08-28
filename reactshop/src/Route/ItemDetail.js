import React from 'react';
import ForItemDetail from './ForItemDetail' 

class ItemDetail extends React.Component{
    state = {
        products: ""
    }
    //api 서버에 접근을 해서 데이터를 받아오는 작업
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ products: res }))
            .catch(err => console.log(err));
    }

    //비동기처리
    callApi = async () => {
        const response = await fetch('/products');
        //서버에 있는 데이터를 들고 와서 json 형태로 body라는 변수에 저장
        const body = await response.json();
        return body;
    }
    render(){
        return(
            <div style={{float:'left',width:'70%', height:'1800px'}}>
                <ForItemDetail/>
                {/* {this.state.products ?
                    this.state.products.map(c => {
                        return <ForItemDetail key={c.id} p_name={c.p_name} image={c.image} price={c.price} />
                    }) : ''} */}
            </div>
        )
    }
}

export default ItemDetail;