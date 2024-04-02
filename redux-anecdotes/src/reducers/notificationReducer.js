import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        notify(state, action) {
            return action.payload.toString()
        }
    }
})

export const setNotification = (message, time) => {
    return async(dispatch) => {
      dispatch(notify(message))
      setTimeout(() => dispatch(notify('')), time)
    }
  }

export const {notify} = notificationSlice.actions
export default notificationSlice.reducer