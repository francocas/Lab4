import { Component, OnInit } from '@angular/core';
import { Juegos } from "../Clases/juegos";
import { Juegos2 } from "../Clases/juegos2";
@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  Juego:Juegos;
  Juego2:Juegos2;
  constructor() { 
    this.Juego = new Juegos("Hola");
    this.Juego2 = new Juegos2();
  }

  ngOnInit() {
  }

}
