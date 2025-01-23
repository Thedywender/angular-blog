import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component_responsive.css']
})
export class BigCardComponent {
  photoCover:string = ""
  cardTitle:string = "Novo Angular criado dinamicamente"
  cardDescription:string = "Um monte de coisa vai começar a fazer sentido agora!"

  constructor() {
  }

}
