import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManageComponent } from './inventory-manage.component';

describe('InventoryManageComponent', () => {
  let component: InventoryManageComponent;
  let fixture: ComponentFixture<InventoryManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
