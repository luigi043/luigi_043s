// checkout.component.ts

import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgIfContext } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart$!: Observable<CartItem[]>;
  totalItems$!: Observable<number>;
  total$!: Observable<number>;
  checkoutForm: FormGroup;

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

  constructor(
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder,
    private checkoutService: CheckoutService
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
    this.totalItems$ = this.cartService.getTotalItemsInCart();
    this.total$ = this.cartService.getTotal();
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.checkoutService.submitCheckoutData(this.checkoutForm.value).subscribe(response => {
        console.log('Checkout data saved successfully', response);
        this.cartService.clearCart();
        this.router.navigate(['/confirmation']);
      }, error => {
        console.error('Error saving checkout data', error);
      });
    } else {
      console.log('Form is not valid');
    }
  }

  goBack(): void {
    this.router.navigate(['/cart']);
  }

  updateQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item);
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }
}
