import {useDispatch, useSelector} from 'react-redux'
import { filterChange } from '../reducers/anecdoteFilter'

const Filter = () => {
    const dispatch = useDispatch()
    const text = useSelector(({filter}) => filter)
    const handleChange = (event) => {
       dispatch(filterChange(event.target.value)) 
    }

    const style = {
        marginBottom: 10
      }    

    return (
        <div style={style}>
        <input 
          type='text'
          value={text}
          onChange={handleChange}/>
      </div>
    )
}

export default Filter