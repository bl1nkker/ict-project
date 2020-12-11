import React, { Component } from 'react'
import "./../css/order.css"

export default class Order extends Component {
    render() {
        return (
            <div className='order'>
                <div className='order-img'>
                    <img  src={this.props.currentOrder.image} alt={this.props.title}/>
                </div>
                
                <div className='order-title'>
                    <p>{this.props.currentOrder.title}</p>  
                </div>
                
                <div className='order-description'>
                    <p>{this.props.currentOrder.fullDescription}</p>
                </div >
                
                <ul className='order-tools'> 
                    <li>Camera: {this.props.currentOrder.camera}</li>
                    <li>Lense: {this.props.currentOrder.camera}</li>
                </ul>
                <button className='button primary order-btn'> Make Order </button>
            </div>
        )
    }
}
