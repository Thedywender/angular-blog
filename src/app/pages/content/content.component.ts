import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataFake } from '../../data/data.fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'] // Corrigido para styleUrls
})
export class ContentComponent implements OnInit {
  photoCover:string = '';
  contentTitle:string = "";
  contentDescription:string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const id = value.get("id");
      if(id){
        this.setValuesToComponent(id);
      }
    })
  }

  goBack() {
    this.router.navigate(['']);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id  )[0];

    if(result){
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }

  }
}
