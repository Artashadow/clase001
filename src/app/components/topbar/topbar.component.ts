import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  titulo: string;
  version: string;

  constructor() {
    this.titulo = 'Admin :)'
    this.version = '1.0'
  }

  ngOnInit() {
  }


}
