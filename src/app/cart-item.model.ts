// src/app/cart-item.model.ts

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images: string[];
  description?: string;
}
  