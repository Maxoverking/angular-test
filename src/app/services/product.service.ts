import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, catchError, delay, retry, tap, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }

    products: IProduct[] = []

    getAllProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products',
            {
                params: new HttpParams({
                    fromObject: {
                        limit: 5
                    }
                })
            }
        ).pipe(
            delay(1000),
            retry(2),
            tap(products => this.products = products),
            catchError(this.errorHandler.bind(this))
        )
    }

    createProduct(newProduct: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', newProduct)
            .pipe(
                tap(prod => {
                    this.products.push(prod)
                    // console.log(this.products)
                }
                )
            )
    }


    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message)
    }
}