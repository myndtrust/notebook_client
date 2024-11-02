
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notebook  } from './notebook';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
  }

  public getNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(`${this.API_URL}/notebook/`, {
      headers: this.getAuthHeaders()
    });
  }

  public postNotebook(new_notebook: Notebook): Observable<Notebook> {
    return this.http.post<Notebook>(`${this.API_URL}/notebook/`, new_notebook, {
      headers: this.getAuthHeaders()
    });
  }

  public putNotebook(the_notebook: Notebook): Observable<Notebook> {
    return this.http.put<Notebook>(`${this.API_URL}/notebook/${the_notebook.id}/`, the_notebook, {
      headers: this.getAuthHeaders()
    });
  }

  public deleteNotebook(notebook_id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/notebook/${notebook_id}/`, {
      headers: this.getAuthHeaders()
    });
  }
}