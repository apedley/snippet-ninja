import { Component, OnInit } from '@angular/core';
import LanguagesService from '../../services/languages.service';
import Language from '../../models/language.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Language[];
  constructor(private languagesService: LanguagesService) { }

  ngOnInit() {
    this.languagesService.getLanguages().subscribe(result => this.languages = result);
  }

}
