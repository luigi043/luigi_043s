import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { MatButtonModule } from '@angular/material/button'; // Angular Material Button Module
import { MatDialogModule } from '@angular/material/dialog'; // Angular Material Dialog Module
import { OverlayModule } from '@angular/cdk/overlay'; // Angular CDK Overlay Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Angular Animations Module

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WatchComponent } from './watch/watch.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component'; // Adicionei o CartComponent aqui

import { AppRoutingModule } from './app-routing.module';
import { CartService } from './cart.service'; // Importe o serviço

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent, // Adicionei AboutComponent
    ContactComponent,
    SocialMediaComponent,
    WatchComponent,
    MerchantComponent,
    CheckoutComponent,
    CartComponent // Adicionei o CartComponent aqui
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule, // Inclua ReactiveFormsModule se você estiver usando formulários reativos
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [
    CartService // Forneça o serviço aqui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
