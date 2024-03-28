import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    loading: true
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
            state.loading = false
        }
    }
});
export const { fetchProducts } = productSlice.actions;

export const getProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(fetchProducts(response.data));
    } catch (error) {
        console.log(error);

    }
};

export default productSlice.reducer;
