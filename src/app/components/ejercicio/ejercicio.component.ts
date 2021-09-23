import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  texto: string;
  bandera: number;
  constructor() {
    this.texto = "Botón sospechoso";
    this.bandera = 0;
  }

  ngOnInit() {

  }

  evento() {
    if (this.bandera == 0) {
      this.texto = "UwU";
      this.bandera = 1;
    }
    else {
      this.texto = "Botón sospechoso";
      this.bandera = 0;
    }
  }

}
