import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component_responsive.css']
})
export class SmallCardComponent {
  @Input() photoSmallCard: string = '';
  @Input() titleSmallCard: string = '';
  @Input() descriptionSmallCard: string = '';
  @Output() cardClick = new EventEmitter<void>();

  constructor() {}

  onCardClick() {
    this.cardClick.emit();
  }
}
