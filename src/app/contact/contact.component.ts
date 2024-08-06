// contact.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/contact', this.contact)
      .subscribe(
        response => {
          console.log('Server response:', response);
          // Optionally, clear the form or show a success message
          this.contact = { name: '', email: '', message: '' };
        },
        error => {
          console.error('Error:', error);
          // Optionally, show an error message to the user
        }
      );
  }
}
