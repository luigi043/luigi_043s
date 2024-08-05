import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';

interface CartItem extends Product {
  quantity: number;
}

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: CartItem[] = [];
  isCartModalOpen = false;
  selectedProduct: Product | null = null;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = this.products;
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
    this.filteredProducts = category === 'all' ? this.products : this.products.filter(product => product.category === category);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product as any);

    // const cartItem = this.cart.find(item => item.id === product.id);
    // if (cartItem) {
    //   cartItem.quantity++;
    // } else {
    //   this.cart.push({ ...product, quantity: 1 });
    // }
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

  toggleCartModal(): void {
    this.isCartModalOpen = !this.isCartModalOpen;
  }

  getTotalItemsInCart(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}
