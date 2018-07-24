import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

//logged in user id sent to reducer to retrieve all authenticated user info
const AUTHED_ID = 'tylermcginnis'

//redux thunk pattern for asynchronus requests
export function handleInitialData () {
  return (dispatch) => {

    return getInitialData() //Async Api method gets the data that will later be added to the store
      .then(({ users, questions }) => {
          //dispatch actions to add data to the store -> these dispatches go to reducers
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}