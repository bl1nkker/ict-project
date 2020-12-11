import React, { Component } from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {connect} from'react-redux'
import {fetchCompanies} from './../redux/actions/fetchingActions'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: null
        }
    }

    componentDidMount(){
        this.props.fetchCompanies()
    }

    openModal = (product) =>{
        this.setState({product})
    }

    closeModal = () =>{
        this.setState({product:null})
    }

    render() {
        const currentProduct = this.state.product
        console.log(this.props.content)
        return (
            <div>
                {!this.props.content ? 
                    <div>Loading...</div>
                            :
                    (<ul className='products'>
                            
                            {this.props.content.map(product => (
                                <li key={product._id}>
                                    <div className='my-product'>
                                        <a href={'#'+product._id} onClick={() => this.openModal(product)}>
                                            <img src={product.image} alt={product.title}></img>
                                            <p>{product.title}</p>
                                        </a>
                                        <div className='product-price photograph'>
                                            <div>{product.price}</div>
                                            <Link to="/get-order"><button onClick={() => this.props.setOrder(product)} className='button primary'>I can do it!</button></Link>
                                        </div>
                                    </div>
                                </li>))}

                    </ul> ) }
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
                                <Link to="/get-order">
                                    <button className='button primary' onClick={() =>{
                                    this.props.setOrder(currentProduct)
                                    this.closeModal()
                                    }}>
                                        I can do it!
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

export default connect((state) => ({content: state.content.contentData}), {fetchCompanies})(Product)