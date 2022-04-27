import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosSucursalesComponent } from './productos-sucursales.component';

describe('ProductosSucursalesComponent', () => {
  let component: ProductosSucursalesComponent;
  let fixture: ComponentFixture<ProductosSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
