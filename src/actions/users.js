export const RECEIVE_USERS = 'RECEIVE_USERS' //action type

//Receive Users action creator
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}