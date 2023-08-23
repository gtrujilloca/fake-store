import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { HomeRoutingModule } from '@pages/home/home-routing.module';
import { productsState } from '@store/products/products.feature';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(productsState),
  ]
})
export class HomeModule { }
