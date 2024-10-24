
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook  } from './notebook';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://0.0.0.0:8000/api';

  constructor(private http: HttpClient) { }

  public getNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(`${this.API_URL}/notebook/`);
  }

  public postNotebook(new_notebook: Notebook) {
    return this.http.post(`${this.API_URL}/notebook/`,new_notebook);
  }

  // Update a Notebook.
  public putNotebook(the_notebook: Notebook) {
    return this.http.put(`${this.API_URL}/notebook/${the_notebook.id}/`,the_notebook);
  }

  // Delete a Notebook.
  public deleteNotebook(notebook_id: number) {
    return this.http.delete(`${this.API_URL}/notebook/${notebook_id}/`);
  }




}
