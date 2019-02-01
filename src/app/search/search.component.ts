import { Component, OnInit } from '@angular/core';
import { Search } from '../search';

import { Result } from '../result';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: Search = {
    artist: '',
    title: ''
  };
  result: Result = {
    lyrics: null,
    error: null
  };
  searching: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  click(): void {
    this.searching = true;
    this.result = {
      lyrics: null,
      error: null
    };
    this.searchService.searchForLyrics(this.search)
      .subscribe(
        (data: Result) => {
          this.searching = false;
          this.result.lyrics = data.lyrics;
        },
        error => {
          this.searching = false;
          this.result.error = error.error.error;
        }
    );
  }
}
