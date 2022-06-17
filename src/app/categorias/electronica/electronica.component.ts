import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.component.html',
  styleUrls: ['./electronica.component.css']
})
export class ElectronicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getCat():any{
    return ["Electronica","Mascotas","Jugueteria","Hogar","Farmacia"]
  }

 
  getProd():Array<string>{
    return ["Memoria RAM Hyper","Procesador Ryzen","Celular X","Procesador Intel Core i7","Laptop marca Patito","Computadora de escritorio"]
  }
  verProd(prod:string):any{
      alert(prod);
  }
}
