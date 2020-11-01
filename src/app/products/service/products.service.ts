import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../shared/models';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    static endpoint = `${environment.apiBaseUrl}/products`

    constructor(
        private http: HttpClient
    ) {
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(ProductsService.endpoint)
    }


}
