import { Component, OnInit } from '@angular/core';
import { Suggest } from '../../models/suggest';
import { SuggestsService } from 'src/app/services/suggests.service';
import { Store } from '@ngrx/store';
import { RootState, SearchInputState, SuggestSelectState } from 'src/app/models/states';
import { Observable } from 'rxjs';
import { ACTION_TYPE_SEARCH_INPUT, SearchAction } from 'src/app/actions/searchAction';
import { ACTION_TYPE_SUGGEST_SELECT, SuggestAction } from 'src/app/actions/suggestAction';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  suggests: Suggest[];
  input: Observable<SearchInputState>;
  suggestSelect: Observable<SuggestSelectState>;

  constructor(
    suggestsService: SuggestsService,
    private store: Store<Pick<RootState, 'searchInput' | 'suggestSelect'>>,
  ) {
    this.suggests = suggestsService.getSuggests();
    this.input = store.select('searchInput');
    // TODO 未使用
    this.suggestSelect = store.select('suggestSelect');
  }

  ngOnInit() { }

  /**
   * 検索条件入力時アクション
   * TODO eventの型がわからない
   *
   * @param event クリックイベント
   */
  changeInput(event: any) {
    const action: SearchAction = {
      type: ACTION_TYPE_SEARCH_INPUT,
      payload: { input: event.target.value },
    };
    this.store.dispatch(action);
  }

  /**
   * サジェスト選択時アクション
   * @param suggest 選択したサジェスト
   */
  clickSuggest(suggest: Suggest) {
    const action: SuggestAction = {
      type: ACTION_TYPE_SUGGEST_SELECT,
      payload: { select: suggest },
    };
    this.store.dispatch(action);
  }
}
