import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginAction} from './../redux/actions/loginActions'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }
    }

    changeHandler = (event) =>{
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="auth-form">
                    <div>
                            <label required for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" onChange={this.changeHandler} value={this.state.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text optional">We'll never share your email with anyone else.</div>
                    </div>
                    <div>
                            <label required for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={() => this.props.loginAction(this.state.email)} class="btn btn-primary submit-btn">Log In</button>`
                </form>
            </div>
        )
    }
}

export default connect((state) => ({currentUser: state.user.currentUser}), {loginAction})(Auth)