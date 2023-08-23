import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeatureKey } from "@shared/interfaces/store";
import { ProductsState } from "./products.reducer";

const productsState = createFeatureSelector<ProductsState>(FeatureKey.PRODUCTS_STATE);

export const products = createSelector(productsState, state => state.products);