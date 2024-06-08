import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { DatePipe } from '../../__helpers/date.pipe';
import { TrimPipe } from '../../__helpers/trim.pipe';

import { ActionService } from '../../__services/action.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DatePipe, TrimPipe, RouterLink, AutoCompleteModule, FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'

})

export class NewsComponent implements OnInit {
  articles: any[] = [];
  filteredGroups: any[] = [];
  searchQuery: string = '';
  totalResults: number = 0;

  constructor(private actionService: ActionService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.actionService.getArticles().subscribe((response: any) => {
      this.articles = response.results;
    });
  }

  filterArticles(event: any) {
    const query = event.query;

    let titleMatches = this.articles.filter(article => article.title.toLowerCase().includes(query));
    let summaryMatches = this.articles.filter(article => article.summary.toLowerCase().includes(query) && !article.title.toLowerCase().includes(query));

    this.filteredGroups = [
      {
        label: 'Titles',
        items: titleMatches
      },
      {
        label: 'Summary',
        items: summaryMatches
      }
    ];

    this.totalResults = titleMatches.length + summaryMatches.length;
  }

  highlight(text: string): string {
    if (!this.searchQuery) return text;
    const query = this.searchQuery;
    return text.replace(new RegExp(query, 'gi'), match => `<span class="highlight">${match}</span>`);
  }

  redirect(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
}