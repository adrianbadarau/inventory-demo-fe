import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../products/service/products.service';

@Component({
    selector: 'app-inventory-manage',
    templateUrl: './inventory-manage.component.html',
    styleUrls: ['./inventory-manage.component.css']
})
export class InventoryManageComponent implements OnInit {

    constructor(private service: ProductsService) {
    }

    ngOnInit(): void {
        this.service.getAll().subscribe((items) => {
            console.log(items)
        })
    }

}
