import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from "axios";

// function for GET data from API(JSON Server)
export const getBooks = createAsyncThunk(
  "books/getBooks",
  async() => {
    try {
      const response = await axios.get('http://localhost:8000/books');
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
)

// function for POST new data to API(JSON Server)
export const saveBook = createAsyncThunk(
  "books/saveBook",
  async(paramBook) => {
    try {
      const response = await axios.post('http://localhost:8000/books', paramBook);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
)

// function for POST new data to API(JSON Server)
export const updateBook = createAsyncThunk(
  "books/updateBook",
  async(paramBook) => {
    try {
      const response = await axios.patch(`http://localhost:8000/books/${paramBook.id}`, paramBook);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
)

// function for Delete selected data from API(JSON Server)
export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async(id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`);
      return id;
    } catch (error) {
      console.error(error)
    }
  }
)

const bookEntity = createEntityAdapter({
  selectId: (books) => books.id
})

// Slice function for Book
const booksSlice = createSlice({
  name: 'books',
  initialState: bookEntity.getInitialState(),
  reducers: {},
  extraReducers:{
    [getBooks.fulfilled]: (state, action) => {
      bookEntity.setAll(state, action.payload);
    },
    [saveBook.fulfilled]: (state, action) => {
      bookEntity.addOne(state, action.payload);
    },
    [deleteBook.fulfilled]: (state, action) => {
      bookEntity.removeOne(state, action.payload);
    },
    [updateBook.fulfilled]: (state, action) => {
      bookEntity.updateOne(state, {id: action.payload.id, updates: action.payload});
    }
  }
})

export const booksSelectors = bookEntity.getSelectors(state => state.books);
export default booksSlice.reducer