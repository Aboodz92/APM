import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/product-list.component';
import {StarComponent} from './shared/star.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './Product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './Product/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductDetailGuard]
      , component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'} //Wildcard, and usually use for the 404 pages.
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
