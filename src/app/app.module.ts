import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    MascotaComponent,
    DiagnosticoComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    //<------
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
