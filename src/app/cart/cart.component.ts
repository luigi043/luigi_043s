import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../cart.service';
import { Observable } from 'rxjs';
import { Product } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$: Observable<CartItem[]>;
  total$: Observable<number>;
  showFullDescription: { [key: number]: boolean } = {};

  constructor(private cartService: CartService, private router: Router) {
    this.cart$ = this.cartService.getCart();
    this.total$ = this.cartService.getTotal();
  }

  ngOnInit(): void {
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }

  goBack(): void {
    this.router.navigate(['/products']); // Ajuste o caminho conforme necessário
  }

  toggleDescription(item: CartItem): void {
    this.showFullDescription[item.id] = !this.showFullDescription[item.id];
  }

  getTotal(): number {
    let total = 0;
    this.cartService.getTotal().subscribe(cartTotal => total = cartTotal);
    return total;
  }
}
