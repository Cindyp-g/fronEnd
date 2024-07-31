import { EmpleadoComponent } from './components/empleado/empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';

const routes: Routes = [
  {path:'empleados',component:EmpleadoComponent},
  {path:'mascotas',component:MascotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
