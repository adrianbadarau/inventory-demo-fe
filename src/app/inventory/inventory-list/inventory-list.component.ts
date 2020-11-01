import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../inventory.service';
import {InventoryItem} from '../../shared/models';

@Component({
    selector: 'app-inventory-list',
    templateUrl: './inventory-list.component.html',
    styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
    items: InventoryItem[] = []

    constructor(private service: InventoryService) {
    }

    ngOnInit(): void {
        this.service.getAll().subscribe(value => {
            this.items = value;
        })
    }

    deleteItem(number: string) {
        console.log('deleted')
    }
}
