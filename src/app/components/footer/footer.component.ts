import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate: string = '';
  currentTime: string = '';

  ngOnInit(): void {
    this.updateDateTime(); // Initialize the date-time
    setInterval(() => {
      this.updateDateTime(); // Update date-time every second
    }, 1000);
  }

  updateDateTime() {
    const now = new Date();

    // Format the date: "Tuesday, April 1, 2025"
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long', // e.g., Tuesday
      month: 'long',   // e.g., April
      day: 'numeric',  // e.g., 1
      year: 'numeric'  // e.g., 2025
    };
    this.currentDate = now.toLocaleDateString('en-US', dateOptions);

    // Format the time: "03:47:12 PM"
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // Use 12-hour clock (for AM/PM)
    };
    this.currentTime = now.toLocaleTimeString('en-US', timeOptions);
  }
}
