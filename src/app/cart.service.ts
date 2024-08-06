import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.service';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  private cart: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.cart);
  private totalItemsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  private updateCartData(): void {
    this.cartSubject.next(this.cart);
    this.totalItemsSubject.next(this.cart.reduce((total, item) => total + item.quantity, 0));
    this.totalSubject.next(this.cart.reduce((total, item) => total + item.quantity * item.price, 0));
  }

  addToCart(product: CartItem): void {
    const cartItem = this.cart.find(item => item.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.updateCartData();
  }

  removeFromCart(product: CartItem): void {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }
    this.updateCartData();
  }

  updateQuantity(product: CartItem): void {
    const cartItem = this.cart.find(item => item.id === product.id);
    if (cartItem) {
      cartItem.quantity = product.quantity;
    }
    this.updateCartData();
  }

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  getTotalItemsInCart(): Observable<number> {
    return this.totalItemsSubject.asObservable();
  }

  getTotal(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  clearCart(): void {
    this.cart = [];
    this.updateCartData();
  }
}
