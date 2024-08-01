import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WatchComponent } from './watch/watch.component';
import { MerchantComponent } from './merchant/merchant.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'contact-me', component: ContactComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'watch', component: WatchComponent },
  { path: 'merchant', component: MerchantComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
