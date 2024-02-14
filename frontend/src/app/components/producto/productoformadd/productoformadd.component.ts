import {Component, Input} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductoService} from "../../../api/producto.service";
import {MessageUtil} from "../../../utils/message.util";

@Component({
  selector: 'app-productoformadd',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './productoformadd.component.html',
  styleUrl: './productoformadd.component.css'
})
export class ProductoformaddComponent {
  constructor(private formBuilder:FormBuilder,private productoService:ProductoService,private messageUtil:MessageUtil) {
  }
  formAdd=this.formBuilder.group({
    name: ['',[Validators.required]],
    price: ['',[Validators.required]],
    description: ['',[Validators.required]],
    mail: ['',[Validators.required,Validators.email]],
    fecha: ['',[Validators.required]],
  });

  @Input() productos: any[]=[];
  @Input() producto!: any;

  crear() {
    console.log(this.productos);
    if(!this.formAdd.valid){
      this.messageUtil.messageShirt("Complete todos los campos","info");
      return;
    }
    this.productoService.createProduct(this.formAdd.value).subscribe(response=>{
      console.log(response);
      this.messageUtil.messageShirt(response.message,response.type);
      if(response.type==="success"){
        this.formAdd.reset();
        this.productos.push(response.producto)
      }
    },(error) => {
      let mensaje="";
      const arrayMsg=<any[]>error.error.message;
      arrayMsg.forEach(data => {
        mensaje += data.msg+" \n";
      });
      this.messageUtil.messageAlert(mensaje,"error");
    });
  }
}
