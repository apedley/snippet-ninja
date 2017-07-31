import { ActivatedRoute } from '@angular/router';
import Snippet from '../../../models/snippet.model';
import SnippetService from '../../../services/snippet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: './snippet-detail.component.html',
  styleUrls: ['./snippet-detail.component.css']
})
export class SnippetDetailComponent implements OnInit {
  snippet: Snippet;
  id: number;

  constructor(private snippetService: SnippetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.snippetService.getSnippet(this.id).subscribe(result => this.snippet = result);
    });
  }

}
