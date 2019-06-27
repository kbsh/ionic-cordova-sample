import { Suggest } from '../models/suggest';
import { SuggestSelectState } from '../models/states';
import { SuggestAction, ACTION_TYPE_SUGGEST_SELECT } from '../actions/suggestAction';

/**
 * state 初期値
 */
const init: Suggest = {
  name: '',
};

/**
 * サジェスト reducer.
 * @param state State.
 * @param action action.
 * @returns state.
 */
export function suggestReducer(state: Suggest = init, action: SuggestAction): SuggestSelectState {
  switch (action.type) {
    case ACTION_TYPE_SUGGEST_SELECT:
      return action.payload.select;
    default:
      return state;
  }
}
