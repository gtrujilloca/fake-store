import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductData, ProductDto } from '@shared/interfaces/product';
import { Observable, map } from 'rxjs';
import { formatProductDto, formatProductDtoList } from '../utils/format-helpers';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = `${environment.baseUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<ProductData[]> {
    return this.http.get<ProductDto[]>(`${this.baseUrl}/products`)
      .pipe(
        map(formatProductDtoList)
      );
  }

  getProduct(id: string): Observable<ProductData> {
    return this.http.get<ProductDto>(`${this.baseUrl}/products/${id}`)
      .pipe(
        map(formatProductDto)
      );
  }


}
