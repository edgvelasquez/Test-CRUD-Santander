import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn:"root"
})
export class ProductoService{
  constructor(private httpCliente:HttpClient) {
  }
  getProducts(){
    return this.httpCliente.get<any>(environment.url+"/products/listarProductos");
  }
  createProduct(producto:any){
    return this.httpCliente.post<any>(environment.url+"/products/crearProducto",producto);
  }
  updateProduct(producto:any){
    return this.httpCliente.put<any>(environment.url+"/products/actualizarProducto",producto);
  }
  deleteProduct(id:string){
    return this.httpCliente.delete<any>(environment.url+"/products/eliminarProducto",{
      params:{_id:id}
    });
  }
}
