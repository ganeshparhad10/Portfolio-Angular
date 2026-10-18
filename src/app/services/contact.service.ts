import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // Free serverless email endpoint powered by FormSubmit.co
  // Delivers submissions straight to your email without requiring any backend code.
  private apiUrl = 'https://formsubmit.co/ajax/ganeshparhad230@gmail.com';

  constructor(private http: HttpClient) {}

  sendContactForm(contactData: ContactFormData): Observable<any> {
    const payload = {
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone || 'N/A',
      message: contactData.message,
      _subject: `Portfolio Message from ${contactData.name}`,
      _captcha: 'false',
      _template: 'table'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.apiUrl, payload, { headers });
  }
}
