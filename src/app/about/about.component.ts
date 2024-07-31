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
      // Adicione todos os caminhos de fotos aqui
      'assets/image/photo100.jpg'
    ];
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }
}
