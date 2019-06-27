import { RootState } from '../models/states';
import { ActionReducerMap } from '@ngrx/store';
import { suggestReducer } from './suggestReducer';
import { searchReducer } from './searchReducer';

const reducers: ActionReducerMap<RootState> = {
  suggestSelect: suggestReducer,
  searchInput: searchReducer,
};

export default reducers;
