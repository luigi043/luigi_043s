import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';
  private suggestedUrl = 'http://localhost:3000/api/suggested-products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getSuggestedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.suggestedUrl);
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
