import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ElectronicaComponent } from './electronica/electronica.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { JugueteriaComponent } from './jugueteria/jugueteria.component';
import { HogarComponent } from './hogar/hogar.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    PreguntasComponent,
    MenuComponent,
    CategoriasComponent,
    ElectronicaComponent,
    MascotasComponent,
    JugueteriaComponent,
    HogarComponent,
    FarmaciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
