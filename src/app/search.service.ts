import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from './search';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private historyService: HistoryService) { }

  searchForLyrics(search: Search) {
    this.historyService.addSearch(search);
    return this.http.get(`https://api.lyrics.ovh/v1/${search.artist}/${search.title}`);
  }
}
