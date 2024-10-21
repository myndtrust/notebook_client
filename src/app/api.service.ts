
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
}
