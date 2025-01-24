import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { Router } from '@angular/router';
import { dataFake } from '../../data/data.fake';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component_responsive.css']
})
export class HomeComponent {
  public articles = dataFake;
  public selectedArticle = this.articles[0];

  constructor(private router: Router) {

  }

  goForward() {
    this.router.navigate(['/content/id']);
  }

  onCardClick(article: any) {
    this.selectedArticle = article;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
