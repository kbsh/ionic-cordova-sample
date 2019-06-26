import { Component, OnInit } from '@angular/core';
import { Suggest } from '../../models/suggest';
import { SuggestsService } from 'src/app/services/suggests.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  suggests: Suggest[];
  input: string;

  constructor(suggestsService: SuggestsService) {
    this.suggests = suggestsService.getSuggests();
    this.input = '';
  }

  ngOnInit() { }

  changeInput(event) {
    console.log(event.target.value);
    this.input = event.target.value;
  }

  clickSuggest(suggest: Suggest) {
    console.log(suggest);
  }
}
