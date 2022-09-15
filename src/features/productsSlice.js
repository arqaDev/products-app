import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const LOWEST_PRICE = 'LOWEST_PRICE'
const HIGHEST_PRICE = 'HIGHEST_PRICE'

export const fetchAsyncProducts = createAsyncThunk(
    'products/productsAsyncThunk',
    async () => {
        const resp = await axios.get('https://fakestoreapi.com/products')
        return resp.data
    },
)

const initialState = {
    products: [],
    currentProduct: {},
    cart: [],
    favorite: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProducts: function(state, action) {
            if (action.payload === LOWEST_PRICE) {
                state.products = state.products.sort((item1, item2) => item1['price'] - item2['price'])
            } else if (action.payload === HIGHEST_PRICE) {
                state.products = state.products.sort((item1, item2) => item2['price'] - item1['price'])
            }
        },
        findProducts: function(state, action) {
            state.products = state.products.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))       
        },
        addCurrentProduct: function(state, action) {
            state.currentProduct = action.payload
        },
        addToCart: function(state, action) {
            if (!state.cart.find(item => item.id === action.payload.id)) {
                state.cart = [...state.cart, action.payload]
            }
        },
        removeFromCart: function(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        addToFavorite: function(state, action) {
            if (!state.favorite.find(item => item.id === action.payload.id)) {
                state.favorite = [...state.favorite, action.payload]
            }
        },
        removeFromFavorite: function(state, action) {
            state.favorite = state.favorite.filter(item => item.id !== action.payload)
        },
    },
    extraReducers: {
        [fetchAsyncProducts.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncProducts.fulfilled]: (state, action) => {
            return {...state, products: action.payload}
        },
        [fetchAsyncProducts.rejected]: () => {
            console.log('rejected')
        },
    }
})

export const { 
                sortProducts,
                findProducts,
                addCurrentProduct,
                addToCart,
                addToFavorite,
                removeFromFavorite,
                removeFromCart,
                
            } = productsSlice.actions

export default productsSlice.reducer