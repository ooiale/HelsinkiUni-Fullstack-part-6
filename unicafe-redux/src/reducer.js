const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let updatedState = {...state}
  switch (action.type) {
    case 'GOOD': {
      updatedState.good += 1
      return updatedState
    }
    case 'OK':
      updatedState.ok += 1
      return updatedState
    case 'BAD':
      updatedState.bad += 1
      return updatedState
    case 'ZERO':
      return {...initialState}
    default: return updatedState
  }
}

export default counterReducer
