import { Suggest } from './suggest';

export interface RootState {
  suggestSelect: SuggestSelectState;
  searchInput: SearchInputState;
}

/**
 * サジェスト 選択内容 state.
 */
export type SuggestSelectState = Suggest;

/**
 * 検索 入力内容 state.
 */
export type SearchInputState = string;
