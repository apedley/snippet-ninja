import { ActivatedRoute } from '@angular/router';
import LanguagesService from '../../../services/languages.service';
import Language from '../../../models/language.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {
  language: Language;
  id: number;

  constructor(private languageService: LanguagesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.languageService.getLanguage(this.id).subscribe(result => this.language = result);
    });
  }

}
