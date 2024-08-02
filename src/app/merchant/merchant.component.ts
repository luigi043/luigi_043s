import { Component } from '@angular/core';

// Define the Product interface with the id field included
interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  size?: string;
  category: string;
  activeImageIndex: number;
  showDescription?: boolean;
  isDetailsOpen?: boolean; // Optional field for product details
}

interface CartItem extends Product {
  quantity: number;
}

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent {
  products: Product[] = [
    { 
      id: 1,
      name: '18500 Unisex Heavy Blend Hooded Sweatshirt',
      price: 39,
      images: ['assets/sweatshirt/sweatshirt1.png', 'assets/sweatshirt/sweatshirt2.png', 'assets/sweatshirt/sweatshirt3.png'],
      activeImageIndex: 0,
      description: `Everyone needs a cozy go-to hoodie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!
    
      • 50% pre-shrunk cotton, 50% polyester
      • Fabric weight: 8.0 oz/yd² (271.25 g/m²)
      • Air-jet spun yarn with a soft feel and reduced pilling
      • Double-lined hood with matching drawcord
      • Quarter-turned body to avoid crease down the middle
      • 1 × 1 athletic rib-knit cuffs and waistband with spandex
      • Front pouch pocket
      • Double-needle stitched collar, shoulders, armholes, cuffs, and hem
      • Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador`,
      size: 'XS, S, M, L, XL, XXL',
      category: 'clothing'
    },
    { 
      id: 2,
      name: 'Standard Postcard',
      price: 8,
      images: ['assets/postcard1.png'],
      activeImageIndex: 0,
      description: `These postcards are made from thick high-quality matte paper, so they serve as a great addition to a gift or just a thoughtful written note to a friend.
      • Cardboard paper
      • Paper weight: 7.67–10.32 oz/yd² (260–350 g/m²)
      • Size: 4″ × 6″ (101 × 152 mm)
      • Paper thickness: 0.013″ (0.34 mm)
      • Coated outer surface
      • Blank product materials sourced from Sweden, US, Brazil, or China.`,
      size: '4" x 6"',
      category: 'home'
    },
    { 
      id: 3,
      name: 'luigi_043_Laugh Holographic Stickers', 
      price: 9, 
      images: ['assets/stickers2.png'], 
      activeImageIndex: 0, 
      description: `Add some sparkle to your life with these holographic stickers. Made from high-quality vinyl, they’re easy to peel and stick, and their adhesive backing ensures long-lasting durability. The unique holographic effect catches the light in a mesmerizing way, making them the ultimate eye-catcher.
      • Hot-embossed, which creates a deep 3D pattern
      • Durable vinyl, perfect for indoor use
      • Fast and easy bubble-free application
      
      Disclaimer: Please note that this product is suitable for indoor use only.`,
      size: '4" x 4"', 
      category: 'accessories' 
    },
    { 
      id: 4,
      name: 'luigi_043_ahh Holographic Stickers', 
      price: 9, 
      images: ['assets/stickers1.png'],
      activeImageIndex: 0, 
      description: `Add some sparkle to your life with these holographic stickers. Made from high-quality vinyl, they’re easy to peel and stick, and their adhesive backing ensures long-lasting durability. The unique holographic effect catches the light in a mesmerizing way, making them the ultimate eye-catcher.

      • Hot-embossed, which creates a deep 3D pattern
      • Durable vinyl, perfect for indoor use
      • Fast and easy bubble-free application
      
      Disclaimer: Please note that this product is suitable for indoor use only.`,
      size: '4" x 4"', 
      category: 'accessories' 
    },
    { 
      id: 5,
      name: 'luigi_043_Hmm_ Holographic Stickers', 
      price: 9, 
      images: ['assets/stickers3.png'],
      activeImageIndex: 0,
      description: `Add some sparkle to your life with these holographic stickers. Made from high-quality vinyl, they’re easy to peel and stick, and their adhesive backing ensures long-lasting durability. The unique holographic effect catches the light in a mesmerizing way, making them the ultimate eye-catcher.

      • Hot-embossed, which creates a deep 3D pattern
      • Durable vinyl, perfect for indoor use
      • Fast and easy bubble-free application
      
      Disclaimer: Please note that this product is suitable for indoor use only.`,
      size: '4" x 4"', 
      category: 'accessories' 
    },
    { 
      id: 6,
      name: 'luigi_043_Huh_ Holographic Stickers', 
      price: 9, 
      images: ['assets/stickers4.png'],
      activeImageIndex: 0, 
      description: `Add some sparkle to your life with these holographic stickers. Made from high-quality vinyl, they’re easy to peel and stick, and their adhesive backing ensures long-lasting durability. The unique holographic effect catches the light in a mesmerizing way, making them the ultimate eye-catcher.

      • Hot-embossed, which creates a deep 3D pattern
      • Durable vinyl, perfect for indoor use
      • Fast and easy bubble-free application
      
      Disclaimer: Please note that this product is suitable for indoor use only.`,
      size: '4" x 4"', 
      category: 'accessories' 
    },
    { 
      id: 7,
      name: 'iPhone Case',
      price: 16,
      images: ['assets/iphone_case/iphone_case2.png'],
      activeImageIndex: 0,
      description: `This sleek iPhone® case protects your phone from scratches, dust, oil, and dirt. It has a solid back and flexible sides that make it easy to take on and off, with precisely aligned port openings.
  
      • Solid polycarbonate back
      • Flexible, see-through polyurethane sides
      • .5 mm raised bezel
      • Precisely aligned port openings
      • Easy to take on and off
      • Wireless charging compatible
      • The SE case fits the 2020 iPhone® SE model
      • Blank product sourced from China or South Korea
  
      Disclaimer: The case may include a protective film on the inside that needs to be removed before use.
  
      Important: The iPhone 15 series can’t be shipped to South Korea, Hong Kong, Taiwan, Japan, or Singapore. If your shipping address is in these regions, please choose a different iPhone model.`,
      size: 'Fits iPhone 11 Pro Max',
      category: 'accessories'
    },
    { 
      id: 8,
      name: 'Snap Case for iPhone®',
      price: 16,
      images: ['assets/iphone_case/iphone_case1.png'],
      activeImageIndex: 0,
      description: `This premium phone case is made for all minimalist style lovers. It’s classy and lightweight but will certainly do the job when it comes to keeping your phone safe.
    
      • Made of polycarbonate (PC) material
      • Wireless charging compatible
      • Precisely aligned port openings
      • Blank product sourced from the Republic of Korea
    
      Disclaimer: Keep away from liquids containing high alcohol levels, as designs on the phone case may rub off. Keep away from direct sunlight to prevent yellowing.
    
      Important: This product can’t be shipped to South Korea, Hong Kong, Taiwan, Japan, or Singapore. If your shipping address is in these regions, please choose a different product.`,
      size: 'Fits iPhone 11 Pro Max',
      category: 'accessories'
    },
    { 
      id: 9,
      name: 'Yupoong 6245CM - Unstructured Classic Dad Cap',
      price: 28,
      images: ['assets/cap/cap1.png', 'assets/cap/cap2.png', 'assets/cap/cap3.png', 'assets/cap/cap4.png', 'assets/cap/cap5.png', 'assets/cap/cap6.png', 'assets/cap/cap7.png', 'assets/cap/cap8.png'],
      activeImageIndex: 0,
      description: `Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.
        
      • 100% chino cotton twill
      • Green Camo color is 35% chino cotton twill, 65% polyester
      • Unstructured, 6-panel, low-profile
      • 6 embroidered eyelets
      • 3 ⅛” (7.6 cm) crown
      • Adjustable strap with antique buckle`,
      size: 'One Size Fits Most',
      category: 'hats'
    },
    { 
      id: 10,
      name: 'Spiral Notebook',
      price: 18,
      images: ['assets/notebook/notebook1.png'],
      activeImageIndex: 0,
      description: `A good notebook can help you with motivation to take more notes, write down ideas, or list future dreams. This custom wire-bound notebook will be a great daily companion whenever you need to put your thoughts down on paper!
        
      • Covers with soft-touch coating
      • Cover weight: 10.38 oz/yd² (352 g/m²)
      • Page weight: 2.62 oz/yd² (89 g/m²)
      • Metal wire-o binding
      • 140 dotted pages
      • US fulfilled notebooks measure 5.5″ × 8.5″ (13 × 21 cm)
      • EU fulfilled notebooks measure 5.7″ × 8.5″ (14.5 × 21 cm)
      • Blank product sourced from the US and Sweden`,
      size: 'A5 - 5.5″×8.5″',
      category: 'school'
    },
    { 
      id: 11,
      name: 'Hardcover Bound Notebook',
      price: 19,
      images: ['assets/notebook/notebook2.png', 'assets/notebook/notebook3.png'],
      activeImageIndex: 0,
      description: `Whether crafting a masterpiece or brainstorming the next big idea, this notebook will inspire your inner wordsmith. The product features 80 lined, cream-colored pages, a built-in elastic closure, and a matching ribbon page marker. Plus, the expandable inner pocket is perfect for storing loose notes and business cards, so you’ll never lose track of important information.
        
      • Cover material: UltraHyde hardcover paper
      • Size: 5.5" × 8.5" (13.97 cm × 21.59 cm)
      • Weight: 10.9 oz (309 g)
      • 80 pages of lined, cream-colored paper
      • Matching elastic closure and ribbon marker
      • Expandable inner pocket`,
      size: 'A4',
      category: 'school'
    },
    { 
      id: 12,
      name: 'All-Over Print Unisex Athletic Long Shorts',
      price: 39,
      images: ['assets/shorts/shorts1.png', 'assets/shorts/shorts2.png', 'assets/shorts/shorts3.png'],
      activeImageIndex: 0,
      description: `Sports outfits can be a lot of hassle, but with these long shorts there's no need for that. Just throw on a pair and go running, swimming, weight-lifting, or participate in any other activity that pops in your mind. These shorts won't let you down!
  
      • 91% recycled polyester, 9% spandex
      • Fabric weight: 5.13 oz. /yd.² (174 g/m²)
      • Four-way stretch moisture-wicking microfiber fabric
      • Breathable and fast-drying material
      • UPF50+ protection
      • 6.5″ (16.5 cm) inseam
      • Elastic waistband with a flat white drawstring
      • Mesh side pockets
      • No inner lining
      • Blank product components sourced from China`,
      size: 'M',
      category: 'clothing'
    },
    { 
      id: 13,
      name: 'GDS101',
      price: 80,
      images: ['assets/gds/gds101.png', 'assets/gds/gds102.png', 'assets/gds/gds103.png', 'assets/gds/gds104.png'],
      activeImageIndex: 0,
      description: `If you're looking for a trendy, one-of-a-kind clothing item, this Champion tie-dye hoodie is the one! It's almost impossible to create two similar items during the garment-dyeing process, so every piece has a unique touch to it.
      • 82% cotton, 18% poly fleece
      • Fabric weight: 12 oz/yd² (406.9 g/m²)
      • Unique scrunch-dye, tie-dye pattern
      • Reverse Weave® cross-grain cut resists shrinkage
      • Two-ply hood with matching drawcords
      • 1×1 rib knit side panels, sleeve cuffs, and bottom hem
      • Front pouch pocket
      • Woven label at the back of the neck
      • Embroidered "C" logo on left sleeve
      • Blank product sourced from El Salvador`,
      size: 'N/A',
      category: 'accessories'
    },
    { 
      id: 14,
      name: 'My Snapback',
      price: 29,
      images: ['assets/snapback/snapback1.png', 'assets/snapback/snapback2.png', 'assets/snapback/snapback3.png', 'assets/snapback/snapback4.png', 'assets/snapback/snapback5.png', 'assets/snapback/snapback6.png', 'assets/snapback/snapback7.png', 'assets/snapback/snapback8.png'],
      activeImageIndex: 0,
      description: `This hat is structured with a classic fit, flat brim, and full buckram. The adjustable snap closure makes it a comfortable, one-size-fits-most hat.
  
      • 80% acrylic, 20% wool
      • Green Camo is 60% cotton, 40% polyester
      • Structured, 6-panel, high-profile
      • 6 embroidered eyelets
      • Plastic snap closure
      • Green undervisor
      • Head circumference: 21⅝″–23⅝″ (54.9 cm–60 cm)
      • Blank product sourced from Vietnam or Bangladesh`,
      size: 'Adjustable',
      category: 'hats'
    },
    { 
      id: 15,
      name: 'My Gildan Softstyle T-Shirt',
      price: 17,
      images: ['assets/tshirt/tshirt1.png'],
      activeImageIndex: 0,
      description: `You've now found the staple t-shirt of your wardrobe. It's made of 100% ring-spun cotton and is soft and comfy. The double stitching on the neckline and sleeves add more durability to what is sure to be a favorite!
        
      • 100% ring-spun cotton
      • Sport Grey is 90% ring-spun cotton, 10% polyester
      • Dark Heather is 65% polyester, 35% cotton
      • 4.5 oz/yd² (153 g/m²)
      • Shoulder-to-shoulder taping
      • Quarter-turned to avoid crease down the center
      • Blank product sourced from Bangladesh, Nicaragua, Honduras, Dominican Republic, Haiti or Guatemala`,
      size: 'M',
      category: 'clothing'
    },
    { 
      id: 16,
      name: 'My Mug',
      price: 18,
      images: ['assets/mug/mug1.png','assets/mug/mug2.png','assets/mug/mug3.png'],
      activeImageIndex: 0,
      description: `Whether you're drinking your morning coffee, evening tea, or something in between—this mug's for you! It's sturdy and glossy with a vivid print that'll withstand the microwave and dishwasher.
        
      • Ceramic
      • 11 oz mug dimensions: 3.8″ (9.6 cm) in height, 3.2″ (8.2 cm) in diameter
      • 15 oz mug dimensions: 4.7″ (11.9 cm) in height, 3.3″ (8.5 cm) in diameter
      • 20 oz mug dimensions: 4.3″ (10.9 cm) in height, 3.7″ (9.3 cm) in diameter
      • Dishwasher and microwave safe
      • Blank product sourced from China`,
      size: '11oz',
      category: 'home'
    },
    { 
      id: 17,
      name: 'My Gildan Sweatshirt',
      price: 36,
      images: ['assets/sweatshirt/sweatshirt4.png', 'assets/sweatshirt/sweatshirt5.png', 'assets/sweatshirt/sweatshirt6.png' ,'assets/sweatshirt/sweatshirt7.png','assets/sweatshirt/sweatshirt8.png','assets/sweatshirt/sweatshirt9.png','assets/sweatshirt/sweatshirt10.png','assets/sweatshirt/sweatshirt11.png'],
      activeImageIndex: 0,
      description: `Everyone needs a cozy go-to hoodie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!
        
      • 50% pre-shrunk cotton, 50% polyester
      • Fabric weight: 8.0 oz/yd² (271.25 g/m²)
      • Air-jet spun yarn with a soft feel and reduced pilling
      • Double-lined hood with matching drawcord
      • Quarter-turned body to avoid crease down the middle
      • 1 × 1 athletic rib-knit cuffs and waistband with spandex
      • Front pouch pocket
      • Double-needle stitched collar, shoulders, armholes, cuffs, and hem
      • Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador`,
      size: 'L',
      category: 'clothing'
    }
];

filteredProducts: Product[] = [];
cart: CartItem[] = [];
isCartModalOpen: boolean = false;
selectedProduct: Product | null = null;

constructor() {
  this.filteredProducts = this.products;
}

previousImage(product: Product): void {
  product.activeImageIndex = (product.activeImageIndex - 1 + product.images.length) % product.images.length;
}

nextImage(product: Product): void {
  product.activeImageIndex = (product.activeImageIndex + 1) % product.images.length;
}

filterCategory(category: string): void {
  this.filteredProducts = category === 'all' ? this.products : this.products.filter(product => product.category === category);
}

addToCart(product: Product): void {
  const cartItem = this.cart.find(item => item.name === product.name);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    this.cart.push({ ...product, quantity: 1 });
  }
}

removeFromCart(product: Product): void {
  const index = this.cart.findIndex(item => item.name === product.name);
  if (index > -1) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else {
      this.cart.splice(index, 1);
    }
  }
}

getTotalItemsInCart(): number {
  return this.cart.reduce((total, item) => total + item.quantity, 0);
}

getTotal(): number {
  return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
}

toggleCartModal(): void {
  this.isCartModalOpen = !this.isCartModalOpen;
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
  // Logic for checkout
  console.log('Checking out', this.cart);
}

}