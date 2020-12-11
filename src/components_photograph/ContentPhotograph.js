import React, { Component } from 'react'
import data from '../data/content-companies.json'
import Filter from './Filter'
import Product from './ProductPhotograph'

export default class ContentCustomer extends Component {
    constructor(props){
        super(props)
        this.state={
            products: data.products,
            size: '',
            sort: '',
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
        }
        this.sortProducts = this.sortProducts.bind(this)
        this.filterProducts = this.filterProducts.bind(this)
    }

    sortProducts = (event) =>{
        const sorted = [...this.state.products].sort((a,b) =>
            event.target.value === 'lowest' ? a.price > b.price ? 1:-1 : /* By lowest */
            event.target.value ==='highest' ? a.price < b.price ? 1:-1 : /* By lowest */
            a._id > b._id ? 1:-1 /* By newest */
        )
        this.setState({
            sort: event.target.value,
            products: sorted
        })
    }

    filterProducts = (event) =>{
        if (event.target.value === 'ALL'){
            return this.setState({
                products: [...data.products]
            })
        }
        console.log(event.target.value)
        const filtered = [...data.products].filter((product) =>product.availableSizes.indexOf(event.target.value) !== -1)
        console.log(filtered)

        this.setState({
            size: event.target.value,
            products: [...filtered]
        })
    }

    createOrder = (order) =>{
        alert('Need to make an order to' + order.name)
    }
    
    render() {
        return (
            <main>
                <div className='content'>
                    <div className='main'>
                        <Filter 
                        count={this.state.products.length}
                        size={this.state.size}
                        sort={this.state.sort}
                        sortProducts={this.sortProducts}
                        filterProducts={this.filterProducts}/>

                        <Product 
                        addToCart={this.addToCart}
                        setOrder={this.props.setOrder}
                        />
                    </div>
                </div>
            </main>
        )
    }
}