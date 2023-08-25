
export type ProductActionTypes =
 | '[Products Page] init'
 | '[Products Page] addProduct'
 | '[Products Page] getProduct';

export type ProductApiActionTypes =
  | '[Products Api] loadAllProductsSucess'
  | '[Products Api] loadAllProductsError';

export enum FeatureKey {
  PRODUCTS_STATE = 'productsState'
}