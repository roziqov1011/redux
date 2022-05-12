import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProducts, successProducts } from '../store/action/product';
import { requestUsers, successUsers } from '../store/action/user';


export const Demo =() =>{
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.list)
    const usersLoading = useSelector(state => state.users.isLoading)

    const products = useSelector(state => state.products.list)
    const productsLoading = useSelector(state => state.products.isLoading)

    const fetchUsers = ()=>{
        dispatch(requestUsers())

        setTimeout(()=>{
            dispatch(successUsers([
                {
                    id: Math.floor(Math.random() * 100),
                    email: `${Math.random().toString().substring(7)}@gmail.com`
                }
            ]))
        },200)
    }
    const fetchProducts = ()=>{
        dispatch(requestProducts())

        setTimeout(()=>{
            dispatch(successProducts([
                {
                    id: Math.floor(Math.random() * 100),
                    emanameil: `Product - ${Math.random().toString().substring(7)}`
                }
            ]))
        },200)
    }
    return <div style={{padding: `10rem`}}>
        <button onClick={fetchUsers}>fetch users</button>
        <button onClick={fetchProducts}>fetch products</button>


        <h2>Users {usersLoading && ` | loading... `}</h2>
        <pre style={{displey: 'block'}}>
            { JSON.stringify(users, null, 4)}
        </pre>


        <h2>Products {productsLoading && ` | loading... `}</h2>
        <pre style={{displey: 'block'}}>
            { JSON.stringify(products, null, 4)}
        </pre>
    </div>
}