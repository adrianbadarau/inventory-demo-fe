import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../service/products.service';
import {KtPair, Product} from '../../shared/models';
import {CartService} from '../../shared/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = []

    constructor(
        private service: ProductsService,
        private cartService: CartService
    ) {
    }

    ngOnInit(): void {
        this.service.getAll().subscribe((items) => {
            console.log(items)
            this.products = items
        })
    }

    deleteItem(number: number) {

    }

    addToCart(product: Product) {
        this.cartService.addToCart(new KtPair(
            product.name,
            1
        ))
    }
}
