import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from "axios";

// function for GET data from API(JSON Server)
export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async() => {
    try {
      const response = await axios.get('http://localhost:8000/transactions');
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
)

// function for POST new data to API(JSON Server)
export const saveTransaction = createAsyncThunk(
  "transactions/saveTransaction",
  async(paramTransaction) => {
    try {
      const response = await axios.post('http://localhost:8000/transactions', paramTransaction);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
)

// function for POST new data to API(JSON Server)
export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async(param) => {
    try {
      const response = await axios.patch(`http://localhost:8000/transactions/${param.id}`, param);
      return response.data;
    } catch (error) {
      console.error(error)
    }
  }
)

// function for Delete selected data from API(JSON Server)
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async(id) => {
    try {
      await axios.delete(`http://localhost:8000/transactions/${id}`);
      return id;
    } catch (error) {
      console.error(error)
    }
  }
)

const transactionEntity = createEntityAdapter({
  selectId: (transactions) => transactions.id
})

// Slice function for Transactions
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactionEntity.getInitialState(),
  reducers: {},
  extraReducers:{
    [getTransactions.fulfilled]: (state, action) => {
      transactionEntity.setAll(state, action.payload);
    },
    [saveTransaction.fulfilled]: (state, action) => {
      transactionEntity.addOne(state, action.payload);
    },
    [updateTransaction.fulfilled]: (state, action) => {
      transactionEntity.updateOne(state, {id: action.payload.id, updates: action.payload});
    }
  }
})

export const transactionsSelectors = transactionEntity.getSelectors(state => state.transactions);
export default transactionsSlice.reducer