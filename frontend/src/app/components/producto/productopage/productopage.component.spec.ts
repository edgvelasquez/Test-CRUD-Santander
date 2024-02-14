import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductopageComponent } from './productopage.component';

describe('ProductopageComponent', () => {
  let component: ProductopageComponent;
  let fixture: ComponentFixture<ProductopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
