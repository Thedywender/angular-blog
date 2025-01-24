import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component_responsive.css']
})
export class BigCardComponent {
  @Input() photoCover:string = ""
  @Input() cardTitle:string = ""
  @Input() cardDescription:string = ""
  @Input() cardId: string = ""
  @Output() cardClick = new EventEmitter<string>();


  constructor() {
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
