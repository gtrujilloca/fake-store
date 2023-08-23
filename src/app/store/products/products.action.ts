import { createAction, props } from "@ngrx/store";
import { ProductActionTypes } from "@shared/interfaces/store";
import { ProductData } from "@shared/interfaces/product";


export const init = createAction<ProductActionTypes>("[Products Page] addProduct");

export const addProduct = createAction<ProductActionTypes, any>(
  "[Products Page] addProduct",
  props<{ product: ProductData }>()
);

