import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
description: any;
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  private cart: CartItem[] = [];

  private itemQuantity: number = 0;

  constructor() {
    // Inicialização do carrinho, pode ser substituída por uma chamada a uma API
    this.cartSubject.next(this.cart);
  }

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(item: CartItem): void {
    this.itemQuantity++;

    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.cartSubject.next(this.cart);
  }

  removeFromCart(item: CartItem): Observable<void> {
    this.itemQuantity--;
    
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    this.cartSubject.next(this.cart);
    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }

  updateQuantity(item: CartItem): Observable<void> {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
      this.cartSubject.next(this.cart);
    }
    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }

  clearCart(): Observable<void> {
    this.cart = [];
    this.cartSubject.next(this.cart);
    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }

  getTotal(): Observable<number> {
    return new Observable<number>(observer => {
      const total = this.cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
      observer.next(total);
      observer.complete();
    });
  }

  getTotalItemsInCart(): Observable<number> {
    return new Observable<number>(observer => {
      const totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);
      observer.next(totalItems);
      observer.complete();
    });
  }
}
