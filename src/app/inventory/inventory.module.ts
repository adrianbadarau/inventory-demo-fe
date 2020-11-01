import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InventoryListComponent} from './inventory-list/inventory-list.component';
import {InventoryManageComponent} from './inventory-manage/inventory-manage.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
    declarations: [InventoryListComponent, InventoryManageComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        RouterModule
    ]
})
export class InventoryModule {
}
