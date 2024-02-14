import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoformupdateComponent } from './productoformupdate.component';

describe('ProductoformupdateComponent', () => {
  let component: ProductoformupdateComponent;
  let fixture: ComponentFixture<ProductoformupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoformupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoformupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
