import { configureStore } from '@reduxjs/toolkit'

// Import Reducer
import booksReducer from '../features/booksSlice'
import transacaionsReducer from "../features/transactionsSlice";
import alertsReducer from '../features/alertsSlice'

export const store = configureStore({
  reducer: {
     books: booksReducer,
     transactions: transacaionsReducer,
     notifications: alertsReducer,
  },
})
