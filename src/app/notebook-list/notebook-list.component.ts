import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../api.service';
import { Notebook } from '../notebook';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrl: './notebook-list.component.css'
})
export class NotebookListComponent  implements OnInit {
  notebooks$: Observable<Notebook[]> = of([]); // Initialize with an empty observable

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getNotebooks();
  }

  public getNotebooks() {
    this.notebooks$ = this.apiService.getNotebooks();
  }

}