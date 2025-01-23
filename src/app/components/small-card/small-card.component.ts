import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component_responsive.css']
})
export class SmallCardComponent {
  @Input()
  photoSmallCard: string = ""
  @Input()
  titleSmallCard: string = ""
  @Input()
  descriptionSmallCard: string = ""

  constructor() {}

}
