import { createFeature } from "@ngrx/store";
import { productsReducer } from "./products.reducer";
import { FeatureKey } from "@shared/interfaces/store";

export const productsState = createFeature({
  name: FeatureKey.PRODUCTS_STATE,
  reducer: productsReducer,
})