import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent.js'
import ProlistComponent from '../components/prolist/prolistComponent.js'
import detailsComponent from '../components/details/detailsComponent.js'
import LoginComponent from '../components/login/LoginComponent'
import RegisterComponent from '../components/register/registerComponent'
import UserComponent from '../components/user/userComponent'
import CollectComponent from '../components/collect/collectComponent'
import UnpaidComponent from '../components/unpaid/unpaidComponent'
import ClassifyComponent from '../components/classify/classifyComponent'
import MessageComponent from '../components/message/messageComponent.js'
import SearchpageComponent from '../components/searchpage/searchpageComponent.js'
import bringComponent from '../components/bring_up/bringComponent.js'
import settlementComponent from '../components/settlement/settlementComponent.js'
import ListComponent from '../components/list/listComponent'
import cartComponent from '../components/cart/cartComponent.js'
import addressComponent from '../components/address/addressComponent.js'

import paymentComponent from '../components/payment/paymentComponent.js'

import noticeComponent from '../components/notice/noticeComponent.js'


const routes = (
    <Route>
        <Route path="/" component={HomeComponent}/>
        <Route path="details(/:id)" component={detailsComponent}/>
        <Route path="login" component={LoginComponent}/>
        <Route path="register" component={RegisterComponent} />
        <Route path="user" component={UserComponent} /> 
        <Route path="collect" component={CollectComponent} /> 
        <Route path="unpaid" component={UnpaidComponent} /> 
        <Route path="classify" component={ClassifyComponent} /> 
        <Route path='list/:id' component={ListComponent}/>
        <Route path="message" component={MessageComponent} />
        <Route path="searchpage" component={SearchpageComponent}/>
        <Route path="bring" component={bringComponent}/>
        <Route path="cart" component={cartComponent}/>
        <Route path="settlement" component={settlementComponent}/>
        <Route path="address" component={addressComponent}/>
        <Route path="payment" component={paymentComponent}/>
        <Route path="notice" component={noticeComponent}/>

    </Route>
)

export default routes;