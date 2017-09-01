import { Component, OnInit } from '@angular/core';
import { Juegos } from "../Clases/juegos";
@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  Juego:Juegos;
  constructor() { 
    this.Juego = new Juegos("Hola");
  }

  ngOnInit() {
  }

}
