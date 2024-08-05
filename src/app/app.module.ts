import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { SaludutngComponent } from './components/saludutng/saludutng.component';
import { DatosComponent } from './components/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    MascotaComponent,
    SaludutngComponent,
    DatosComponent
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
