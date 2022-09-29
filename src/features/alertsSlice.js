import { createSlice } from '@reduxjs/toolkit'

// Slice function for Alert Message
const alertsSlice = createSlice({
    name: 'alerts',
    initialState: {
        alert: []
    },
    reducers: {
        createAlert: (state, action) => {
            state.alert.push({
                message: action.payload.message,
                type: action.payload.type
            })
        },
        deleteAlert: (state) => {
            state.alert.pop()
        }
    },
    extraReducers:{
    }
})

// Export action of Alerts Slice
export const alertAction = alertsSlice.actions

// Export Alerts reducer
export default alertsSlice.reducer