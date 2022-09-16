import { configureStore } from '@reduxjs/toolkit'

import booksReducer from '../_reducers/booksSlice'

export const store = configureStore({
  reducer: {
     books: booksReducer
  },
})
