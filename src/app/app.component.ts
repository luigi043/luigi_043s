import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'luigi_043s';
  [x: string]: any;
  selectedButton: string | null = null;

  goTo(url: string) {
    window.open(url, '_blank');
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

  hoverButton(button: string | null) {
    // This function can be used for additional hover logic if needed
  }
}