import {Injectable} from '@angular/core';
import {KtPair, SalesOrder} from './models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    static endpoint = `${environment.apiBaseUrl}/shopping`

    items: KtPair[] = []

    constructor(
        private http: HttpClient
    ) {
    }

    addToCart(item: KtPair) {
        const index = this.findIndex(item);
        if (index >= 0) {
            this.items[index].second += 1;
        } else {
            this.items.push(item)
        }
    }

    private findIndex(item: KtPair): number {
        return this.items.findIndex(value => value.first === item.first);
    }

    removeFromCart(item: KtPair) {
        const index = this.findIndex(item)
        if (index >= 0) {
            const qty = --this.items[index].second;
            if (qty <= 0) {
                this.items.splice(index, 1)
            }
        }
    }

    clearCart(): KtPair[] {
        return this.items = [];
    }

    checkout(): Observable<string> {
        const order = new SalesOrder(this.items)
        return this.http.post<string>(CartService.endpoint, order)
    }

    checkStockForItem(productName: string): Observable<number> {
        return this.http.get<number>(encodeURI(`${CartService.endpoint}/stock/${productName}`))
    }
}
