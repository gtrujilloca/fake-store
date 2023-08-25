import { createAction, props } from "@ngrx/store";
import { ProductData } from "@shared/interfaces/product";
import { ProductApiActionTypes } from "@shared/interfaces/store";


export const loadAllProductsSucess = createAction<ProductApiActionTypes, any>(
  '[Products Api] loadAllProductsSucess',
  props<{ products: ProductData[] }>()
)

export const loadAllError = createAction<ProductApiActionTypes, any>(
  '[Products Api] loadAllProductsError',
  props<{ errorMessage: string }>()
)