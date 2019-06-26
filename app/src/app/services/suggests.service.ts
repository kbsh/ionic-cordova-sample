import { Injectable } from '@angular/core';
import { Suggest } from '../models/suggest';

@Injectable({
  providedIn: 'root'
})
export class SuggestsService {

  constructor() { }

  getSuggests(): Suggest[] {
    return [
      { name: 'いぬ' },
      { name: 'ねこ' },
      { name: 'ふくろう' },
      { name: 'ハムスター' },
      { name: 'いぬ2' },
      { name: 'ねこ2' },
      { name: 'ふくろう2' },
      { name: 'ハムスター2' },
      { name: 'いぬ3' },
      { name: 'ねこ3' },
      { name: 'ふくろう3' },
      { name: 'ハムスター3' },
      { name: 'いぬ4' },
      { name: 'ねこ4' },
      { name: 'ふくろう5' },
      { name: 'ハムスター5' },
    ];
  }
}
