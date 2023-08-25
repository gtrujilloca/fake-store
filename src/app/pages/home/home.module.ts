import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { HomeRoutingModule } from '@pages/home/home-routing.module';
import { productsState } from '@store/products/products.feature';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '@store/index';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(productsState),
    EffectsModule.forFeature([ ProductsEffects ]),
  ]
})
export class HomeModule { }
