import companies from '../../data/content-companies.json'
import { FETCH_COMPANIES } from '../types'

export const fetchCompanies = () => async (dispatch) => {
    dispatch({
        type: FETCH_COMPANIES,
        payload: companies.products
    })
}