import React from 'react';
import './ForItemList.css'


class ForItemList extends React.Component {
    render() {
        return (
                <div className="ItemContainer">
                    <div><img src={this.props.image} alt="제품" /></div>
                    <div><h2>{this.props.p_name}</h2></div>
                    <div><h4>{this.props.price} 원</h4></div>
                </div>
        )
    }
}


export default ForItemList;