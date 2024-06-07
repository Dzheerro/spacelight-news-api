import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../__services/action.service';
import { ActivatedRoute, Params, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{

  articleId!: number;
  articleInfo: any;


  constructor(private actionService: ActionService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe( (params: Params) => {
      this.articleId = +params['id'];
    });

    this.getArticleById();
  }

  getArticleById() {
    this.actionService.getArticleById(this.articleId).subscribe( (response: any) => {
      this.articleInfo = response;
    })
  }

}
