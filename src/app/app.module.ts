import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule if you're using ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WatchComponent } from './watch/watch.component';
import { MerchantComponent } from './merchant/merchant.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
