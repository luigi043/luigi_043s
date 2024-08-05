import { Component, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.service';

interface CartItem extends Product {
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: CartItem[] = [];
  // @Input() isCartModalOpen = false;

  constructor(private router: Router) {}

  // toggleCartModal(): void {
  //   this.isCartModalOpen = !this.isCartModalOpen;
  // }

  getTotalItemsInCart(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
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
  }

  checkout(): void {
    this.router.navigate(['/checkout']); // Navegue para a página de checkout
  }
}
