import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; // Import FormsModule if you're using ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WatchComponent } from './watch/watch.component';
import { MerchantComponent } from './merchant/merchant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WatchComponent,
    AboutComponent,
    SocialMediaComponent,
    MerchantComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    OverlayModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
