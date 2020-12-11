import React, { Component } from 'react'
import data from './../data/fl-accounts.json'
import orders from '../data/orders.json'
import "./../css/profile.css"

export default class Profile extends Component {
    render() {
        let currentUser = this.props.user
        return (
            <div className="profile">
                <div className="profile-img">
                    <img src={currentUser.image} alt={currentUser.name}/>
                </div>

                <div className="profile-info">
                    <div>
                        <h2>Name: <span>{currentUser.name}</span></h2>
                    </div>

                    <div>
                        <h2>Age: <span>{currentUser.age}</span></h2>
                    </div>

                    <div>
                        <h2>Geolocation: <span>{currentUser.geo}</span></h2>
                    </div>

                    <div>
                        <h2>Email: <span>{currentUser.email}</span></h2>
                    </div>

                    <div>
                        <h2>Number: <span>{currentUser.number}</span></h2>
                    </div>
                    <hr />
                </div>

                <div className="profile-description">
                    <p>{currentUser.fullDescription}</p>
                    <p>{currentUser.description}</p>
                </div>


                <div className="profile-orders">
                    {currentUser.orders.map( order_id =>(
                        <div className="profile-order">
                            <div className="profile-order-img">
                                <img src={orders[order_id].image} alt=""/>
                            </div>

                            <div className="profile-order-description">
                                <h3>{orders[order_id].description}</h3>
                            </div>

                            <div className="profile-order-info">
                                <p>{orders[order_id].geo}</p>
                                <p>{orders[order_id].date}</p>
                                <hr />
                            </div>

                            <div className="profile-order-grade">
                                <p>{orders[order_id].grade}/5</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
