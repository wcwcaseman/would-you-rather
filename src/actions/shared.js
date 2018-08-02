import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

//redux thunk pattern for asynchronus requests
export function handleInitialData () {
  return (dispatch) => {

    return getInitialData() //Async Api method gets the data that will later be added to the store
      .then(({ users, questions }) => {
          //dispatch actions to add data to the store -> these dispatches go to reducers
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}