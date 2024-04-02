import { createAnecdote } from '../requests'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const dispatch = useNotificationDispatch()
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newObject) => {
      const prevAnecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], prevAnecdotes.concat(newObject))
      dispatch({type: 'SET_NOTIFICATION', payload: `added ${newObject.content}`, dispatch})
    },
    onError: (error) => {
      console.log('error: ',error)
      dispatch({type: 'SET_NOTIFICATION', payload: error.response.data.error, dispatch})
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes:0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
