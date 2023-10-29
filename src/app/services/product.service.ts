import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, catchError, delay, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {

    }

    getAllProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/productss',
            {
                params: new HttpParams({
                    fromObject: {
                        limit: 5
                    }
                })
            }
        ).pipe(
            delay(1000),
            catchError(this.errorHandler.bind(this))
        )
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message)
    }
}