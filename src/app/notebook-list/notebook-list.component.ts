import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../api.service';
import { Notebook } from '../notebook';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.css']
})
export class NotebookListComponent implements OnInit {
  notebooks$: Observable<Notebook[]> = of([]); // Initialize with an empty observable
  notebook_form!: FormGroup;
  originalNotebookData: { [key: number]: Notebook } = {}; // Store original data for canceling edits

  constructor(
    private apiService: ApiService,
    private form_builder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getNotebooks();
    this.notebook_form = this.form_builder.group({
      name: ['', Validators.required], // Validator for required field
      description: ['', Validators.required] // Validator for required field
    });
  }

  public getNotebooks() {
    this.notebooks$ = this.apiService.getNotebooks();
  }

  onSubmit() {
    if (this.notebook_form.valid) {
      // Only submit if the form is valid
      this.apiService.postNotebook(this.notebook_form.value)
        .subscribe(
          (response) => {
            console.log(response);
            this.getNotebooks();
          }
        );
    }
  }

  updateNotebook(notebook: Notebook) {
    this.apiService.putNotebook(notebook).subscribe(() => {
      notebook.isEditable = false;
      this.getNotebooks(); // Refresh the list after updating
    });
  }

  deleteNotebook(notebookId: number) {
    this.apiService.deleteNotebook(notebookId).subscribe(() => {
      this.getNotebooks(); // Refresh the list after deletion
    });
  }

  cancelEdit(notebook: Notebook) {
    if (this.originalNotebookData[notebook.id]) {
      Object.assign(notebook, this.originalNotebookData[notebook.id]); // Restore original data
    }
    notebook.isEditable = false;
  }

  startEdit(notebook: Notebook) {
    this.originalNotebookData[notebook.id] = { ...notebook }; // Store original data
    notebook.isEditable = true;
  }

}
