import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { DatePipe } from '../../__helpers/date.pipe';
import { TrimPipe } from '../../__helpers/trim.pipe';

import { ActionService } from '../../__services/action.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DatePipe, TrimPipe, RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  articles: any;

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.actionService.getArticles().subscribe((response: any) => {
      this.articles = response.results;
    })
  }

}
