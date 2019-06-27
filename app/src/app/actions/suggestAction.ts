import { Action } from '@ngrx/store';
import { SuggestSelectState } from '../models/states';

/**
 * action type.
 */
export const ACTION_TYPE_SUGGEST_SELECT = 'SUGGEST_SELECT';

export interface SuggestAction extends Action {
  payload: Payload;
}

interface Payload {
  select: SuggestSelectState;
}
