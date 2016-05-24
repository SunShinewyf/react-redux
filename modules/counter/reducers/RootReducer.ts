import { Action } from "redux-actions";
import { RootState } from "../models";
import * as ActionType from "../constants/ActionTypes";

export function RootReducer(state: RootState, action: Action): RootState {
    if(typeof state == 'undefined'){
    	return [];
    }

    switch(actions.type){
    	case 'add_todo':
    	return state.slice(0).concat({
				text: action.text,
				completed: false
			});
			break;
		case 'del_todo':
		return state;
		  break;
		case 'edit_todo':
		return state;
		break
		default:
		  return state;

    }
}
