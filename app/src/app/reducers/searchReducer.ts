import { SearchInputState } from '../models/states';
import { SearchAction, ACTION_TYPE_SEARCH_INPUT } from '../actions/searchAction';

/**
 * state 初期値
 */
const init: SearchInputState = '';

/**
 * 検索 reducer.
 * @param state state.
 * @param action action.
 * @returns state.
 */
export function searchReducer(state: SearchInputState = init, action: SearchAction): SearchInputState {
  switch (action.type) {
    case ACTION_TYPE_SEARCH_INPUT:
      return action.payload.input;
    default:
      return state;
  }
}
