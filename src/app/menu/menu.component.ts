import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  modo:string="oscuro";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  cambiarModo():any{
    if (this.modo=="oscuro"){
        $("html,body").css({"background":"white","color":"black"})
        this.modo = "claro"
    }else{
        $("html,body").css({"background":"black","color":"white"})
        this.modo = "oscuro"
    }
  }

}
