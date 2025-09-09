import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as Product[],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    updateProduct: (state, action) => {
      const { id, data } = action.payload;
      const index = state.products.findIndex((p) => p.id === id);
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          ...data,
        };
      }
    },

    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((p) => p.id !== id);
    },

    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProduct,
  setProducts,
  updateProduct,
  deleteProduct,
  clearProducts,
} = productSlice.actions;

export default productSlice.reducer;
