import SnippetService from '../../services/snippet.service';
import { Component, OnInit } from '@angular/core';
import Snippet from '../../models/snippet.model';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {
  snippets: Snippet[];
  
  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.snippetService.getSnippets().subscribe(result => this.snippets = result);
  }

}
