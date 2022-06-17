import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getProd():Array<string>{
    return ["Collares","Esfera Hamster","Pecera","Plato Comida Perro","Sobre Pedigree","Whiskas"]
  }
  verProd(prod:string):any{
      alert(prod);
  }



}
