import React, { Component } from 'react'
import image from './../imports/homepage.jpg'


export default class HomePage extends Component {
    render() {
        return (
            <div className="home-image">
                <img src={image} alt="homepage"/>
            </div>
        )
    }
}
