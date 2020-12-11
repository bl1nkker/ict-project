import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./css/auth.css"

import cust_data from './data/customer.json'
import phot_data from './data/photog.json'

import Auth from './components/Auth';
import Header from './components/Header'
import Profile from './components/Profile'
import Order from './components/Order'
import Content from './components/Content'

import About from './common/About'
import HomePage from './common/HomePage'

import ContentPhotograph from './components_photograph/ContentPhotograph';
import HeaderPhotograph from './components_photograph/HeaderPhotograph';
import GetOrder from './components_photograph/GetOrder';
import ProfilePhotograph from './components_photograph/ProfilePhotograph';



export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      userLogin: '', // Need to fix dat shit

      //Photograph
      currentOrder:{},
      customer_emails: [],
      photograph_emails: []
    }
  }

  componentDidMount(){
    const cust_lst = []
    cust_data.customers.map( customer =>(
      cust_lst.push(customer.email)
    ))

    const photo_lst = []
    phot_data.photographs.map( photograph =>(
      photo_lst.push(photograph.email)
    ))

    this.setState({customer_emails:[...cust_lst], photograph_emails:[...photo_lst]})
  }

  authUser = (username) =>{
    this.setState({userLogin:username})
    localStorage.setItem("username", this.state.userLogin)
  }

  setOrder = (order) =>{
    this.setState({currentOrder: order})
  }

  render(){

    return (
      <div className="grid-container">
        {
        this.state.userLogin === "" ? 
        <Auth authUser={this.authUser}/>
        :(this.state.customer_emails.indexOf(this.state.userLogin) ?
        
        
        <Router>
            <HeaderPhotograph />
            <Route path="/" exact render={ (props) => <HomePage {...props}/>}/>
            <Route path="/content-photograph" render={ (props) => <ContentPhotograph {...props} setOrder={this.setOrder}/>}/>
            <Route path="/profile-photograph" render={ (props) => <ProfilePhotograph {...props} userLogin={this.state.userLogin}/>}/>
            <Route path="/get-order"render={ (props) => <GetOrder {...props} currentOrder={this.state.currentOrder}/>} />
            <Route path="/about-us"render={ (props) => <About {...props} currentOrder={this.state.currentOrder}/>} />
          </Router>
          :
          (<Router>
            <Header />
            <Route path="/" exact render={ (props) => <HomePage {...props}/>}/>
            <Route path="/content" render={ (props) => <Content {...props} setOrder={this.setOrder}/>}/>
            <Route path="/profile" render={ (props) => <Profile {...props} userLogin={this.state.userLogin}/>}/>
            <Route path="/order"render={ (props) => <Order {...props} currentOrder={this.state.currentOrder}/>} />
            <Route path="/about-us"render={ (props) => <About {...props} currentOrder={this.state.currentOrder}/>} />
          </Router>)
        )
          
        
          
        
        
        }
        
        
        
        <footer>All rights reserved</footer>
      </div>
    );
  }
  
}