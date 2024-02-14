import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductoService} from "../../../api/producto.service";
import {MessageUtil} from "../../../utils/message.util";

@Component({
  selector: 'app-productoformupdate',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './productoformupdate.component.html',
  styleUrl: './productoformupdate.component.css'
})
export class ProductoformupdateComponent implements OnChanges {
  @Input() productos: any[]=[];
  @Input() producto!: any;
  constructor(private formBuilder: FormBuilder, private productoService: ProductoService,private messageUtil:MessageUtil) {
  }
  ngOnChanges(data: any): void {
    try {
      if (data.producto.currentValue !== undefined) {
        this.producto = data.producto.currentValue;
        this.formEdit = this.formBuilder.group({
          _id: [this.producto._id, [Validators.required]],
          name: [this.producto.name, [Validators.required]],
          price: [this.producto.price, [Validators.required]],
          description: [this.producto.description, [Validators.required]],
          mail: [this.producto.mail, [Validators.required, Validators.email]],
          fecha: [this.producto.fecha.toString().substring(0,10), [Validators.required]],
        });
      }
    }catch (e){
    }
  }

  formEdit=this.formBuilder.group({
    _id: ['',[Validators.required]],
    name: ['',[Validators.required]],
    price: ['',[Validators.required]],
    description: ['',[Validators.required]],
    mail: ['',[Validators.required,Validators.email]],
    fecha: ['',[Validators.required]],
  });

  editar() {
    let index=this.productos.findIndex(p=>p._id===this.formEdit.value._id);
    console.log(index);
    if(!this.formEdit.valid){
      console.log("El formulario no es válido");
      return ;
    }
    this.productoService.updateProduct(this.formEdit.value).subscribe(response=>{
      this.messageUtil.messageShirt(response.message,response.type);
      if(response.type==="success"){
        this.formEdit.reset();
        document.getElementById("btnCloseFormUpdate")?.click();
        this.productos[index]=response.producto;
      }
    },(error) => {
      console.log(error);
      if(error.status!==undefined && error.status===500){
        this.messageUtil.messageAlert("Name y/o mail ya se encuentra/n registrado/s en la base de datos","error");
        return ;
      }
      let mensaje="";
      const arrayMesg=<any[]>error.error.message;
        arrayMesg.forEach(data => {
          mensaje += data.msg+" \n";
        });
      this.messageUtil.messageAlert(mensaje,"error");
    });
  }
}
