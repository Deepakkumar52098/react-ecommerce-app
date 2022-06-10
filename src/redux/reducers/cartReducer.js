import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalAmount: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1
            state.products.push(action.payload)
            state.totalAmount += action.payload.amountToBePaid
        },
        // updateProductQuantity:(state,action)=>{
        //     let index = state.products.findIndex(action.payload._id)
        //     state.totalAmount = (state.totalAmount - action.payload.amountToBePaid) + (action.payload.quantity* action.payload.price)
        //     state.products[index].quantity = action.payload.quantity
        // }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;