import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  getCat():any{
    return ["Electronica","Mascotas","Jugueteria","Hogar","Farmacia"]
  }

}
