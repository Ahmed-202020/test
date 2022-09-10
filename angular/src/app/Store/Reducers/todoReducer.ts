import { SUCCESS } from "../Actions/todoAction"
import { FAILED } from './../Actions/todoAction';

let initialState = {
  todo:[]
}

export let todoReducer = (state = initialState , action:any) => {
  switch (action.type) {
    case SUCCESS:
      return action.payload
    case FAILED:
      console.log("error", action.payload)
      return state
  }
}
