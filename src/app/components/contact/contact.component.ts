import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService, ContactFormData } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;
  isActivationNeeded: boolean = false;
  errorMessage: string = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.isActivationNeeded = false;

    this.contactService.sendContactForm(this.contact).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        const isOk = response && (response.success === true || response.success === 'true');

        if (isOk) {
          this.submitSuccess = true;
          form.resetForm();
          this.contact = { name: '', email: '', phone: '', message: '' };
        } else if (response && response.message && response.message.includes('needs Activation')) {
          this.isActivationNeeded = true;
          this.errorMessage = "Almost done! FormSubmit sent an 'Activate Form' confirmation email to ganeshparhad230@gmail.com. Click that link once to activate submissions.";
        } else {
          this.submitError = true;
          this.errorMessage = (response && response.message) || 'Unable to submit at this time. Please use direct email or WhatsApp below.';
        }
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError = true;
        this.errorMessage = 'Network connection issue. Please use the direct email or WhatsApp buttons below!';
        console.error('Contact Form Error:', err);
      },
    });
  }

  getDirectMailto(): string {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${this.contact.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Ganesh,\n\n${this.contact.message || ''}\n\nPhone: ${this.contact.phone || 'N/A'}\nEmail: ${this.contact.email || 'N/A'}`
    );
    return `mailto:ganeshparhad42@gmail.com?subject=${subject}&body=${body}`;
  }
}
