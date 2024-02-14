import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductolistComponent } from './productolist.component';

describe('ProductolistComponent', () => {
  let component: ProductolistComponent;
  let fixture: ComponentFixture<ProductolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
