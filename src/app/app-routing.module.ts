import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ElectronicaComponent } from './categorias/electronica/electronica.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contactos", component:ContactoComponent},
  {path:"preguntas", component:PreguntasComponent},
  {path:"menu", component:MenuComponent},
  {path:"categorias", component:CategoriasComponent},
  {path:"electronica", component:ElectronicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
