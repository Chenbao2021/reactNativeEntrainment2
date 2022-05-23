import { createSlice } from '@reduxjs/toolkit';

export const OrdersStorySlice = createSlice({
  name: 'ordersStoryReducer',
  initialState: {
    orders: [],
  },
  reducers: {
    addOrderHistory: (state, action) => {
      (state.orders).push(action.payload.order);
    },
    setPlatNotFinished: (state, action) => {
      if ((state.orders).findIndex((p) => p.id === action.payload.orderId) !== -1) {
        const orderIndex = (state.orders).findIndex((p) => p.id === action.payload.orderId)
        const platfinished = state.orders[orderIndex].plats[action.payload.platIndex].finished;
        state.orders[orderIndex].plats[action.payload.platIndex].finished = !platfinished;
      }
    },
    deleteOrderStory: (state, action) => {
      const orderIndex = (state.orders).findIndex((p) => p.id === action.payload.orderId)
      state.orders.splice(orderIndex, 1)
    },
  },
});

export const { addOrderHistory, setPlatNotFinished, deleteOrderStory } = OrdersStorySlice.actions;
export const OrdersStoryRed = OrdersStorySlice.reducer;
