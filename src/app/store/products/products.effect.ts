import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsActions, ProductsApiActions } from "..";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { ProductService } from "@services/product.service";

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductService,
  ) {

  }

  loadAllProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProductsActions.init),
      exhaustMap(_ =>
        this.productsService.getProducts().pipe(
          tap(products => console.log(products)),
          map(products => ProductsApiActions.loadAllProductsSucess({ products })),
          catchError(_ =>
            of(ProductsApiActions.loadAllError({ errorMessage: 'Error loading products' }))
          )
        )
      )
    )
  )


  notifyApiError$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProductsApiActions.loadAllError),
      tap((action) => window.alert(action.errorMessage))
    ),
    { dispatch: false }
  )
}