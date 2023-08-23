import { ActionReducer, ActionReducerMap, createReducer, on } from "@ngrx/store";
import { ProductData } from "@shared/interfaces/product";
import { ProductsActions } from "..";
import { productListMock } from "@mocks/products";


export interface ProductsState {
  products: ProductData[];
}

const initialState: ProductsState = {
  products: [],
}

export const productsReducer: ActionReducer<ProductsState> = createReducer(
  initialState,
  on(ProductsActions.init, (state) => ({
    ...state,
    products: productListMock
  })),
  on(ProductsActions.addProduct, (state, action) => ({
    products: [...state.products, action.product]
  })),
)