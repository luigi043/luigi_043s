import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  photos: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.photos = this.getImagesFromDirectory();
  }

  getImagesFromDirectory(): string[] {
    return [
      'assets/image/photo1.jpg',
      'assets/image/photo2.jpg',
      'assets/image/photo3.jpg',
      'assets/image/photo4.jpg',
      'assets/image/photo5.jpg',
      'assets/image/photo6.jpg',
      'assets/image/photo7.jpg',
      'assets/image/photo8.jpg',
      // Adicione todos os caminhos de fotos aqui
    ];
  }

  goToTwitch(): void {
    window.open('https://www.twitch.tv/luigi_043_', '_blank');
  }

  launchStream(): void {
    window.open('https://www.twitch.tv/luigi_043_', '_blank');
  }

  checkOutMerch(): void {
    window.open('https://streamlabs.com/luigi_043/merch', '_blank'); // Substitua pelo URL da loja de merchandise
  }
}
