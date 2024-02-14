import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductoService} from "../../../api/producto.service";
import {formatCurrency} from "@angular/common";

@Component({
  selector: 'app-productolist',
  standalone: true,
  imports: [],
  templateUrl: './productolist.component.html',
  styleUrl: './productolist.component.css'
})
export class ProductolistComponent implements OnInit{

  @Output()
  eventSetProducto=new EventEmitter<any>();
  @Output()
  eventSetProductos=new EventEmitter<any>();

  @Output()productos: any[]=[];
  constructor(private productoService:ProductoService) {
  }
  ngOnInit(): void {
      this.productoService.getProducts().subscribe(productos => {
        this.productos = productos;
        this.eventSetProductos.emit(this.productos);
      });
  }
  eliminar(producto:any) {
    this.eventSetProducto.emit(producto);
  }
  editar(producto: any) {
    this.eventSetProducto.emit(producto);
  }

  protected readonly formatCurrency = formatCurrency;
}
