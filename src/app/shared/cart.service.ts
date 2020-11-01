import {Injectable} from '@angular/core';
import {KtPair, SalesOrder} from './models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

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

    checkout() {
        const order = new SalesOrder(this.items)
        this.http.post(CartService.endpoint, order).subscribe(resp => {
            if (resp === 'SUCCESS') {
                this.items = [];
                console.log( resp, this.items)
            }
        })
    }
}
