import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:"platform"
})
export class MessageUtil{
  messageShirt(title:any,type:any){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: type,
      title: title
    });
  }
  messageAlert(title:any,type:any){
    Swal.fire({
      icon: type,
      title: "Mensaje",
      text: title,
    });
  }
}
