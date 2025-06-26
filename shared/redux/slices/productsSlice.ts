import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  description: string;
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products as Product[];
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao carregar produtos';
      });
  },
});

export default productsSlice.reducer;