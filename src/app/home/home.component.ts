import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;
  constructor(private router: Router) {}

  goToTwitch() {
    window.location.href = 'https://twitch.tv/luigi_043_';
  }
}
