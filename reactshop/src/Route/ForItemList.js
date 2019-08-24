import React from 'react';
import './ForItemList.css'


class ForItemList extends React.Component {
    render() {
        return (
                <div className="ItemContainer">
                    <div><img src={this.props.image} alt="제품" /></div>
                    <div>{this.props.p_name}</div>
                    <div>{this.props.price}</div>
                </div>
        )
    }
}


export default ForItemList;