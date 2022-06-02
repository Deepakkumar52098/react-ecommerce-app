import axios from "axios";

const BASE_URL = "http://localhost:4000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjk4NDJiZTJhNWE0YTc1MzBkYTA0OTQiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjU0MTUyNDk4fQ.hqXI_QRM2fSm7UwLDoL822kuEeDHE2uo0fbV__KjO04"


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
        return response
    } catch (e) {
        console.log(e)
    }
}
