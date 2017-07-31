import HelperService from './helper.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class LanguagesService {
  private prefix: string;
  private readonly languageEndpoint = '/api/languages';
  
  constructor(private http: Http, private helperService: HelperService) {
    this.prefix = this.helperService.API_PREFIX;
  }

  getLanguages() {
    return this.http.get(this.prefix + this.languageEndpoint)
      .map(res => res.json());
  }
  
  getLanguage(id) {
    return this.http.get(this.prefix + this.languageEndpoint + '/' + id + this.helperService.includeFilters(['snippets']))
      .map(res => res.json());
  }

}
