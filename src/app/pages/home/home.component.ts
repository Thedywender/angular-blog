import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { Router } from '@angular/router';
import { dataFake } from '../../data/data.fake';

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component_responsive.css']
})
export class HomeComponent {

  public articles = dataFake;
  constructor(private router: Router) {

  }

  goForward() {
    this.router.navigate(['/content/id']);
  }

}
