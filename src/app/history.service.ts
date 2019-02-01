import { Injectable } from '@angular/core';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: Search[] = [];

  constructor() { }

  addSearch(search: Search) {
    this.history.push(search);
  }

}
