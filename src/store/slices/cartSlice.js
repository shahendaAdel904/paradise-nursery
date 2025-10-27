import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    const raw = localStorage.getItem("pv_cart_v1");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const save = (items) => {
  try {
    localStorage.setItem("pv_cart_v1", JSON.stringify(items));
  } catch {}
};

const initialState = {
  items: load(), // array of { id, name, price, image, quantity }
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      const existing = state.items.find((it) => it.id === p.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...p, quantity: 1 });
      }
      save(state.items);
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const it = state.items.find((x) => x.id === id);
      if (it) it.quantity += 1;
      save(state.items);
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const it = state.items.find((x) => x.id === id);
      if (it) {
        it.quantity -= 1;
        if (it.quantity <= 0) {
          state.items = state.items.filter((x) => x.id !== id);
        }
      }
      save(state.items);
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
      save(state.items);
    },
    clearCart(state) {
      state.items = [];
      save(state.items);
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (item) {
        item.quantity = Math.max(0, Number(quantity));
        if (item.quantity === 0) state.items = state.items.filter((x) => x.id !== id);
      }
      save(state.items);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
  setQuantity,
} = slice.actions;

export default slice.reducer;
