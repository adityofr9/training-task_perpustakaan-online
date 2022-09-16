import { createSlice } from '@reduxjs/toolkit'

// Slice function for Book
const booksSlice = createSlice({
  name: 'BOOKS',
  initialState: {
    title: "Example title",
    author: "Example author",
    publisher: "Example publisher",
    yearPubc: 2016,
    typeBook: "Novel",
    source: "Collection",
    oldBook: "no",
    bookshelf: "North",
    status: "Tersediaa",
    inputDate: ""
  },
  reducers: {
    ADD(state, action){
      console.log(window);
      console.log(action.payload)
      // const book = action.payload
      // state.books[book.id] = book
      state.title= action.payload.title;
      state.author= action.payload.author;
      state.publisher= action.payload.publisher;
      state.yearPubc= action.payload.yearPubc;
      state.typeBook= action.payload.typeBook;
      state.source= action.payload.source;
      state.oldBook= action.payload.oldBook;
      state.bookshelf= action.payload.bookshelf;
      state.status= action.payload.status;
      state.inputDate= action.payload.inputDate;
    },
    // EDIT(state, action){},
    DELETE(state, action){
      delete state.books[action.payload]
    }
  }
})

export const { ADD, DELETE, } = booksSlice.actions

// console.log(ADD({ title: "Test Book Title", author: 'Test Author', status: "Tersedia" }))
// console.log(booksSlice);
export default booksSlice.reducer