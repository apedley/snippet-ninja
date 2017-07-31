import HelperService from './helper.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class SnippetService {
  private prefix: string;
  private readonly snippetEndpoint = '/api/snippets';
  
  constructor(private http: Http, private helperService: HelperService) {
    this.prefix = this.helperService.API_PREFIX;
  }

  getSnippets() {
    return this.http.get(this.prefix + this.snippetEndpoint)
      .map(res => res.json());
  }
  
  getSnippet(id) {
    return this.http.get(this.prefix + this.snippetEndpoint + '/' + id + this.helperService.includeFilters(['language', 'developer']))
      .map(res => res.json());
  }

}

function includeFilters(relations: string[]) {
  let queryString = '?';
  relations.forEach(relation => {
    queryString += `filter[include]=${relation}&`;
  });
  return queryString;
}