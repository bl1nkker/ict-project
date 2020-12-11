import { LOG_IN } from '../types'
import customers from './../../data/cst-accounts.json'
import freelancers from './../../data/fl-accounts.json'

export const loginAction = (email) => async(dispatch) =>{
    let currentUser = {}
    freelancers.photographs.map( photograph => (photograph.email === email ? currentUser = photograph:
        customers.customers.map( customer => (customer.email === email ? currentUser = customer: null))))
    
    dispatch({
        type: LOG_IN,
        payload: currentUser
    })
}