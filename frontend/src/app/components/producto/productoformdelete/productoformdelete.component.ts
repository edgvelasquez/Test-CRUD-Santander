import {Component, Input} from '@angular/core';
import {ProductoService} from "../../../api/producto.service";
import {MessageUtil} from "../../../utils/message.util";
import {formatCurrency} from "@angular/common";

@Component({
  selector: 'app-productoformdelete',
  standalone: true,
  imports: [],
  templateUrl: './productoformdelete.component.html',
  styleUrl: './productoformdelete.component.css'
})
export class ProductoformdeleteComponent {
  @Input() producto!: any;
  @Input() productos: any[]=[];

  constructor(private productoService:ProductoService,private messageUtil:MessageUtil) {
  }

  eliminar() {
    this.productoService.deleteProduct(this.producto._id).subscribe(response=>{
      this.messageUtil.messageShirt(response.message,response.type);
      if(response.type==="success") {
        this.productos.splice(this.productos.findIndex(producto => producto._id === this.producto._id), 1);
        document.getElementById("btnCloseFormDelete")?.click();
      }
    });
  }

  protected readonly formatCurrency = formatCurrency;
}
