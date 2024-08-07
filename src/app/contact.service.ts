import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) { }

  submitContactMessage(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
