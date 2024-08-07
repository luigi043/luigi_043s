import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../checkout.service';
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
  checkoutForm: FormGroup;
  emptyCart!: TemplateRef<NgIfContext<CartItem[] | null>> | null;

  constructor(
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder,
    private checkoutService: CheckoutService
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['@example.com', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['0000-000', [Validators.required, Validators.pattern('^[0-9]{5}-[0-9]{3}$')]],
      cardName: ['', Validators.required],
      cardNumber: ['0000-0000-0000-0000', [Validators.required, Validators.pattern('^\\d{4}-\\d{4}-\\d{4}-\\d{4}$')]],
      expDate: ['MM/YY', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/(\\d{2})$')]],
      expYear: ['2024', [Validators.required, Validators.pattern('^\\d{4}$')]],
      cvv: ['000', [Validators.required, Validators.pattern('^\\d{3}$')]]
    });
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
    this.totalItems$ = this.cartService.getTotalItemsInCart();
    this.total$ = this.cartService.getTotal();
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const checkoutData = this.checkoutForm.value;
      this.cart$.subscribe(cart => {
        const totalAmount = this.total$;

        // Log information about the checkout
        console.log('Checkout Data:', checkoutData);
        console.log('Cart Data:', cart);
        console.log('Total Amount:', totalAmount);

        // Submit the checkout data
        this.checkoutService.submitCheckoutData({
          ...checkoutData,
          cart: cart,
          total: totalAmount
        }).subscribe(response => {
          console.log('Checkout data saved successfully', response);
          this.cartService.clearCart();
          this.router.navigate(['/confirmation']); // Ajuste a rota conforme necessário
        }, error => {
          console.error('Error saving checkout data', error);
        });
      });
    } else {
      console.log('Form is not valid');
    }
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
