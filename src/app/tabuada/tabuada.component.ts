import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  x = 1;

  constructor() {}

  ngOnInit() {}

  tabuadaCinco() {

    return [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
  }
}
