import HelperService from './services/helper.service';
import SnippetService from './services/snippet.service';
import LanguagesService from './services/languages.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { SnippetListComponent } from './components/snippets/snippet-list/snippet-list.component';
import { LanguageListComponent } from './components/languages/language-list/language-list.component';
import { HeaderComponent } from './components/app/header/header.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LanguageDetailComponent } from './components/languages/language-detail/language-detail.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetDetailComponent } from './components/snippets/snippet-detail/snippet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetListComponent,
    LanguageListComponent,
    HeaderComponent,
    LanguagesComponent,
    LanguageDetailComponent,
    SnippetsComponent,
    SnippetDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'languages/:id', component: LanguageDetailComponent},
      { path: 'languages', component: LanguagesComponent },
      { path: 'snippets/:id', component: SnippetDetailComponent },
      { path: 'snippets', component: SnippetsComponent }
    ])
  ],
  providers: [
    LanguagesService,
    SnippetService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
