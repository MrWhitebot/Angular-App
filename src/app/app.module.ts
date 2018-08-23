import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';
import { PaisesFormComponent } from './paises-form/paises-form.component';
import { PaisPorNombrePipe } from './pais-por-nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPaisesComponent,
    PaisesFormComponent,
    PaisPorNombrePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
