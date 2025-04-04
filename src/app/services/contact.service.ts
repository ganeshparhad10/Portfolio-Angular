import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/users/add'; // Update with your backend endpoint

  constructor(private http: HttpClient) {}

  sendContactForm(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
