import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductsActions, ProductsSelector } from '@store/index';

import { ProductData } from '@shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  products$: Observable<ProductData[]> = this.store.select(ProductsSelector.products);

  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(ProductsActions.init());
  }

}
