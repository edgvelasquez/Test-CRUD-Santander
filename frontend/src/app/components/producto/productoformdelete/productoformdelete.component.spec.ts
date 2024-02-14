import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoformdeleteComponent } from './productoformdelete.component';

describe('ProductoformdeleteComponent', () => {
  let component: ProductoformdeleteComponent;
  let fixture: ComponentFixture<ProductoformdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoformdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoformdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
