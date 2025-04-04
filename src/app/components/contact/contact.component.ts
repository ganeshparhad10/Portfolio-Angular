import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact = { name: '', email: '', phone: '', message: '' };

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    this.contactService.sendContactForm(this.contact).subscribe({
      next: (response) => {
        console.log('Submitted:', response);
        alert('Form Submitted Successfully!');
        form.resetForm(); // ✅ Clear all form fields and validations
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Submission failed. Please try again later.');
      },
    });
  }
}
