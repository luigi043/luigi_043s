import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  activeImageIndex: number;
  description: string;
  size: string;
  category: string;
}
