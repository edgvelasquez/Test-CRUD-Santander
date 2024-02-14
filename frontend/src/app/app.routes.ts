import { Routes } from '@angular/router';
import {ProductopageComponent} from "./components/producto/productopage/productopage.component";

export const routes: Routes = [
  {path:"",redirectTo:"productos",pathMatch:"full"},
  {path:"productos",component:ProductopageComponent}
];
