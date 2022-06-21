import { SHOW_ALERT, HIDE_ALERT } from '../types'

export function showAlert(alert) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: alert,
    })
  }
}

export function hideAlert() {
  return dispatch => {
    dispatch({
      type: HIDE_ALERT,
    })
  }
}