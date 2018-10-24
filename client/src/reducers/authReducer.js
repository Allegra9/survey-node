import { FETCH_USER } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
    default:
      return state
  }
}

//null - awaiting promise to resolve
//action.payload - user model 
//false - user is not logged in
