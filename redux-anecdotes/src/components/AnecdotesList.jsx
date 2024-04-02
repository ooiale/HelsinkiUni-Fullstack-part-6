import { useSelector, useDispatch } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {
    const anecdotes = useSelector(({anecdotes}) => anecdotes)
    const filter = useSelector(({filter}) => filter)

    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdoteToChange = anecdotes.find(a => a.id === id)
        const newAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
        dispatch(voteTo(newAnecdote))
        dispatch(setNotification(`you liked "${newAnecdote.content}"`, 5000))
      }

    const sortedAnecdotes = anecdotes
        .filter(a => a.content.includes(filter))
        .sort((a,b) => b.votes - a.votes)

    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
      )}
        </div>
    )
}

export default AnecdotesList