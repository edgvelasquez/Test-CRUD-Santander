import {Component, Input, Output} from '@angular/core';
import {ProductolistComponent} from "../productolist/productolist.component";
import {ProductoformaddComponent} from "../productoformadd/productoformadd.component";
import {ProductoformupdateComponent} from "../productoformupdate/productoformupdate.component";
import {ProductoformdeleteComponent} from "../productoformdelete/productoformdelete.component";

@Component({
  selector: 'app-productopage',
  standalone: true,
  imports: [
    ProductolistComponent,
    ProductoformaddComponent,
    ProductoformupdateComponent,
    ProductoformdeleteComponent
  ],
  templateUrl: './productopage.component.html',
  styleUrl: './productopage.component.css'
})
export class ProductopageComponent {
  producto: any;
  productos:any[]=[];
}
