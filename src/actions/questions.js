export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS' //action type

//Receive Questions action creator
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}