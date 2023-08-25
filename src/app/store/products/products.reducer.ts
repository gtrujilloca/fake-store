import { ActionReducer, ActionReducerMap, createReducer, on } from "@ngrx/store";
import { ProductData } from "@shared/interfaces/product";
import { ProductsActions, ProductsApiActions } from "..";
import { productListMock } from "@mocks/products";


export interface ProductsState {
  products: ProductData[];
}

const initialState: ProductsState = {
  products: [],
}

export const productsReducer: ActionReducer<ProductsState> = createReducer(
  initialState,
  on(ProductsApiActions.loadAllProductsSucess, (state, action) => ({
    ...state,
    products: action.products
  })),
  on(ProductsActions.addProduct, (state, action) => ({
    products: [...state.products, action.product]
  })),
)