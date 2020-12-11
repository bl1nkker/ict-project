import companies from '../../data/content-companies.json'
import freelancers from '../../data/content-freelancers.json'

import { FETCH_COMPANIES, FETCH_FREELANCERS } from '../types'

export const fetchCompanies = () => async (dispatch) => {
    dispatch({
        type: FETCH_COMPANIES,
        payload: companies.products
    })
}

export const fetchFreelancers = () => async (dispatch) => {
    dispatch({
        type: FETCH_FREELANCERS,
        payload: freelancers.products
    })
}