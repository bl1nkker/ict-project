import React, { Component } from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: null
        }
    }

    openModal = (product) =>{
        this.setState({product})
    }

    closeModal = () =>{
        this.setState({product:null})
    }

    render() {
        const currentProduct = this.state.product
        return (
            <div>
               <ul className='products'>
                            {this.props.products.map(product => (
                                <li key={product._id}>
                                    <div className='my-product'>
                                        <a href={'#'+product._id} onClick={() => this.openModal(product)}>
                                            <img src={product.image} alt={product.title}></img>
                                            <p>{product.title}</p>
                                        </a>
                                        <div className='product-price'>
                                            <div>{product.price}</div>
                                            <Link to="/order"><button onClick={() => this.props.setOrder(product)} className='button primary'>Ask For Order</button></Link>
                                        </div>
                                    </div>
                                </li>))}
                        </ul>  
                {currentProduct && 
                <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <button onClick={this.closeModal} className='modal-close-btn'>x</button>
                    <div className='modal-product-details'>
                        <img src={currentProduct.image} alt={currentProduct.title}/>
                        <div className='modal-product-details-description'>
                            <p><strong>{currentProduct.title}</strong></p>
                            <p>{currentProduct.description}</p>
                            <div className='product-price'>
                                <div>{currentProduct.price}</div>
                                <Link to="/order">
                                    <button className='button primary' onClick={() =>{
                                    this.props.setOrder(currentProduct)
                                    this.closeModal()
                                    }}>
                                        Ask for order
                                    </button>
                                </Link> 
                            </div>

                        </div>

                    </div>
                </Modal>}
            </div>
        )
    }
}