import { ProductType } from "@/component/ProductCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  items: ProductType[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ProductType>) => {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearFavorites: (state) => {
      state.items = [];
    },
    toggleFavorite: (state, action: PayloadAction<ProductType>) => {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  toggleFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
