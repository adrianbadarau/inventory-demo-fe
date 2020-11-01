import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../service/products.service';
import {InventoryItem, KtPair, Product} from '../../shared/models';
import {CartService} from '../../shared/cart.service';
import {InventoryService} from '../../inventory/inventory.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = []
    inventoryItems: InventoryItem[] = []

    constructor(
        private service: ProductsService,
        private cartService: CartService,
        private inventoryService: InventoryService
    ) {
    }

    ngOnInit(): void {
        this.service.getAll().subscribe((items) => {
            console.log(items)
            this.products = items
        })
        this.inventoryService.getAll().subscribe(value =>
            this.inventoryItems = value
        )
    }

    deleteItem(number: number) {

    }

    addToCart(product: Product) {
        this.cartService.addToCart(new KtPair(
            product.name,
            1
        ))
    }

    async brakeBE(artId: string) {
        const item = await this.inventoryService.find(artId).toPromise()
        return item.name
    }

    findItemName(artId: string): string {
        return this.inventoryItems.find(value => value.art_id === artId).name
    }
}
