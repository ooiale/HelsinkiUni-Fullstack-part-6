import {useDispatch} from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addNewAnecdote(content))
        dispatch(setNotification(`successfully added "${content}"`, 5000))
      }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <input name='anecdote'/>
            <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default NewAnecdote