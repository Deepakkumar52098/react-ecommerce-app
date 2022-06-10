import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../redux/reducers/userReducer";

const BASE_URL = "http://localhost:4000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMzNjN2ZlYmQ4NTZmMjI2MWQzYzUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTQ3OTc1MDN9.0Qt6r3YtIaVBhqgIHoH-j3keLepCMyzm3jozuiHQW6s"


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
})

export const getAllProducts = async () => {
    try {
        const response = await userRequest.get(`http://localhost:4000/api/product/allProducts`)
        return response;
    } catch (e) {
        console.log(e)
    }
}

export const getAllProductsWithCategory = async (category) => {
    try {
        const response = await userRequest.get(`http://localhost:4000/api/product/allProducts?category=${category}`)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const getProductById = async (id) => {
    try {
        const response = await userRequest.get(`http://localhost:4000/api/product/${id}`)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const addToCart = async (data) => {
    try {
        const response = await userRequest.post(`http://localhost:4000/api/cart/`, data)
        return response;
    } catch (e) {
        console.log(e)
    }
}

export const login = async (dispatch,user)=>{
    try{
        dispatch(loginStart());
        const response = await publicRequest.post(`http://localhost:4000/api/auth/login`, user)
        dispatch(loginSuccess(response.data))
        // return response;
    }catch(e){
        dispatch(loginFailure())
        console.log(e)
    }
}
