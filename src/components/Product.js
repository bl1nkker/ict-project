import React, { Component } from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchFreelancers} from './../redux/actions/fetchingActions'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: null
        }
    }

    componentDidMount(){
        this.props.fetchFreelancers()
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
                {!this.props.content ? 
                    <div>Loading...</div>
                :
                    <ul className='products'>
                    {this.props.content.map(freelancer => (
                        <li key={freelancer._id}>
                            <div className='my-product'>
                                <a href={'#'+freelancer._id} onClick={() => this.openModal(freelancer)}>
                                    <img src={freelancer.image} alt={freelancer.title}></img>
                                    <p>{freelancer.title}</p>
                                </a>
                                <div className='product-price'>
                                    <div>{freelancer.price}</div>
                                    <Link to="/order"><button onClick={() => this.props.setOrder(freelancer)} className='button primary'>Ask For Order</button></Link>
                                </div>
                            </div>
                        </li>))}
                    </ul> 
                }
                
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

export default connect((state) => ({content: state.content.contentData}), {fetchFreelancers})(Product)