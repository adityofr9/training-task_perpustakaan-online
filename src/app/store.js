import { configureStore } from '@reduxjs/toolkit'

// Import Reducer
import booksReducer from '../features/booksSlice'
import alertsReducer from '../features/alertsSlice'

export const store = configureStore({
  reducer: {
     books: booksReducer,
     notifications: alertsReducer
  },
})
