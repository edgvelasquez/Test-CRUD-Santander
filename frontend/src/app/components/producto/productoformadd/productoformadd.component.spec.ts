import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoformaddComponent } from './productoformadd.component';

describe('ProductoformaddComponent', () => {
  let component: ProductoformaddComponent;
  let fixture: ComponentFixture<ProductoformaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoformaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoformaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
