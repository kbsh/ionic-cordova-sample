import { Action } from '@ngrx/store';
import { SearchInputState } from '../models/states';

/**
 * action type.
 */
export const ACTION_TYPE_SEARCH_INPUT = 'SEARCH_INPUT';

export interface SearchAction extends Action {
  payload: Payload;
}

interface Payload {
  input: SearchInputState;
}
