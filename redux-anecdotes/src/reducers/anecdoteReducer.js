import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdoteService'


const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    vote(state, action) {
      const newAnecdote = action.payload
      const id = newAnecdote.id
      return state.map(a => a.id === id ? newAnecdote : a)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }

})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const initialData = await anecdoteServices.getAll()
    dispatch(setAnecdotes(initialData))
  }
}

export const addNewAnecdote = (content) => {
  return async(dispatch) => {
    const newObject = await anecdoteServices.createAnecdote(content)
    dispatch(appendAnecdote(newObject))
  }
}

export const voteTo = (anecdote) => {
  return async(dispatch) => {
    const newObject = await anecdoteServices.updateAnecdote(anecdote)
    dispatch(vote(newObject))
  }
}


export const {vote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer