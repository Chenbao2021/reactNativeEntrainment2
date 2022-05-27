import { createSlice } from '@reduxjs/toolkit';

export const OrdersSlice = createSlice({
  name: 'ordersReducer',
  initialState: {
    orders: [
      {
        id: 1,
        time: 'Fri May 20 2022 13:01:38 GMT+0200 (CEST)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 3,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 4,
          },
          {
            id: 3, name: 'plat 3', finished: false, pieces: 5,
          }, {
            id: 4, name: 'plat 4', finished: false, pieces: 6,
          }, {
            id: 5, name: 'plat 5', finished: false, pieces: 8,
          },
        ],
        colorStatus: 1
      },
      {
        id: 2,
        time: 'Fri May 20 2022 15:50:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 3,
        time: 'Fri May 20 2022 20:50:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 4,
        time: 'Fri May 20 2022 16:50:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 5,
        time: 'Fri May 20 2022 15:55:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 2, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
          {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
          {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 15,
        time: 'Fri May 20 2022 15:55:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 35,
        time: 'Fri May 20 2022 15:55:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'Sur place',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 351,
        time: 'Fri May 20 2022 15:55:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 353,
        time: 'Fri May 20 2022 15:55:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 354,
        time: 'Fri May 20 2022 15:55:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 6543,
        time: 'Fri May 20 2022 16:35:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 63535,
        time: 'Fri May 20 2022 16:35:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
      {
        id: 6433,
        time: 'Fri May 20 2022 16:35:22 GMT+0200 (Central European Summer Time)',
        iconName: 'md-bicycle',
        mode: 'A livrer',
        orderfinished: false,
        urgent: false,
        plats: [
          {
            id: 1, name: 'plat 1', finished: false, pieces: 4,
          }, {
            id: 2, name: 'plat 2', finished: false, pieces: 1,
          }, {
            id: 3, name: 'plat 3', finished: false, pieces: 2,
          },
        ],
        colorStatus: 1,
      },
    ],
  },
  reducers: {
    addOrder: (state, action) => {
      (state.orders).push(action.payload.order);
    },
    setPlatFinished: (state, action) => {
      // const tmp = state.orders[action.payload[0] - 1].plats[action.payload[1]].finished;
      if ((state.orders).findIndex((p) => p.id === action.payload.orderId) !== -1) {
        const orderIndex = (state.orders).findIndex((p) => p.id === action.payload.orderId)
        const platfinished = state.orders[orderIndex].plats[action.payload.platIndex].finished;
        state.orders[orderIndex].plats[action.payload.platIndex].finished = !platfinished;
      }
    },
    deleteOrder: (state, action) => {
      const orderIndex = (state.orders).findIndex((p) => p.id === action.payload.orderId)
      state.orders.splice(orderIndex, 1)
    },
    setUrgent: (state, action) => {
      if ((state.orders).findIndex((p) => p.id === action.payload.orderId) !== -1) {
        const orderIndex = (state.orders).findIndex((p) => p.id === action.payload.orderId)
        state.orders[orderIndex].urgent = !(state.orders[orderIndex].urgent)
      }
    },
    setColorStatus: (state, action) => {
      if ((state.orders).findIndex((p) => p.id === action.payload.orderId) !== -1) {
        const orderIndex = (state.orders).findIndex((p) => p.id === action.payload.orderId)
        state.orders[orderIndex].colorStatus = action.payload.updateColor;
      }
    }
    }
  },
);

export const { setPlatFinished, deleteOrder, addOrder, updatePlat, setUrgent, setColorStatus } = OrdersSlice.actions;
export const OrdersRed = OrdersSlice.reducer;
