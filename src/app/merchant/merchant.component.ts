import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CartService, CartItem } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  products$: Observable<Product[]>;
  filteredProducts: Product[] = [];
  cart$: Observable<CartItem[]>;
  selectedProduct: Product | null = null;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products$ = this.productService.getProducts();
    this.cart$ = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.products$.subscribe((data) => {
      this.filteredProducts = data;
    });
  }

  previousImage(product: Product): void {
    if (product.activeImageIndex > 0) {
      product.activeImageIndex--;
    } else {
      product.activeImageIndex = product.images.length - 1;
    }
  }

  nextImage(product: Product): void {
    if (product.activeImageIndex < product.images.length - 1) {
      product.activeImageIndex++;
    } else {
      product.activeImageIndex = 0;
    }
  }

  filterCategory(category: string): void {
    this.products$.subscribe((products) => {
      this.filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    });
  }

  addToCart(product: Product): void {
    const cartItem: CartItem = { ...product, quantity: 1 };
    this.cartService.addToCart(cartItem);
  }

  openProductDetails(product: Product): void {
    this.selectedProduct = product;
  }

  closeProductDetails(): void {
    this.selectedProduct = null;
  }

  buyNow(product: Product): void {
    this.addToCart(product);
    this.checkout();
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }

  getTotalItemsInCart(): Observable<number> {
    return this.cartService.getTotalItemsInCart();
  }

  getTotal(): Observable<number> {
    return this.cartService.getTotal();
  }
}
