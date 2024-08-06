import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WatchComponent } from './watch/watch.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

// Definição das rotas
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redireciona para a rota padrão
  { path: '', component: HomeComponent, pathMatch: 'full' },  // Define rota para Home
  { path: 'about', component: AboutComponent },  // Corrigido para 'about'
  { path: 'contact', component: ContactComponent },  // Corrigido para 'contact'
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'merchant', component: MerchantComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }, // Add the checkout route

  { path: 'store', component: MerchantComponent },  // Pode ser removido se duplicado com 'merchant'
  // { path: '**', redirectTo: '/home' }  // Redireciona para a Home em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
