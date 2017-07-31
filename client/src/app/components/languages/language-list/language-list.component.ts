import { Component, Input, OnInit } from '@angular/core';
import Language from '../../../models/language.model';
import LanguagesService from '../../../services/languages.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  @Input() languages: Language[];
  constructor() { }

  ngOnInit() {
  }

}
