import { Component, Input, OnInit } from '@angular/core';
import Snippet from '../../../models/snippet.model';

@Component({
  selector: 'app-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent implements OnInit {
  @Input() snippets: Snippet[];

  constructor() { }

  ngOnInit() {
  }

}
