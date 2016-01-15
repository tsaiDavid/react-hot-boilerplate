import * as types from 'constants/testRunner'

const initialState = {
  isRunning: false
}

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_NEWS_STARTED:
      return Object.assign({}, state, {
        isRunning: true
      })

    case types.FETCH_NEWS_COMPLETED:
      console.log(action.news)
      const extendData = Object.assign({}, state.data, action.news)
      return Object.assign({}, state, {
        isRunning: false,
        data: extendData
      })

    case types.FETCH_NEWS_FAILED:
      return Object.assign({}, state, {
        isRunning: false
      })

    default:
      return state
  }
}
