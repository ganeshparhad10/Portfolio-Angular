import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  viewMode: 'digital' | 'pdf' = 'digital';

  setViewMode(mode: 'digital' | 'pdf'): void {
    this.viewMode = mode;
  }

  printResume(): void {
    window.print();
  }
}
