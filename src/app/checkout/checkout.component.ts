import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart$!: Observable<CartItem[]>;
  totalItems$!: Observable<number>;
  total$!: Observable<number>;

  billingInfo = {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    expYear: '',
    cvv: ''
  };

  emptyCart: TemplateRef<NgIfContext<CartItem[] | null>> | null = null;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
    this.totalItems$ = this.cartService.getTotalItemsInCart();
    this.total$ = this.cartService.getTotal();
  }

  onSubmit(): void {
    console.log('Billing Information:', this.billingInfo);

    this.cartService.clearCart();
    this.router.navigate(['/confirmation']); // Ajuste a rota conforme necessário
  }

  goBack(): void {
    this.router.navigate(['/cart']); // Navegar de volta para a página do carrinho
  }

  updateQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item);
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }
}
