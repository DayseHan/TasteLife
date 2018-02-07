import {combineReducers} from 'redux'


import details from '../components/details/detailsReducer.js'
import login from '../components/login/loginReducer'
import home from '../components/home/homeReducer.js'
import cart from '../components/cart/cartReducer.js'
import settlement from '../components/settlement/settlementReducer.js'
export default combineReducers({
    login,
    details,
    home,
    cart,
    settlement
})