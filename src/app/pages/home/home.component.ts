import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductsActions, ProductsSelectors } from '@store/index';

import { ProductData } from '@shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  products$: Observable<ProductData[]> = this.store.select(ProductsSelectors.products);

  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(ProductsActions.init());
  }

}
