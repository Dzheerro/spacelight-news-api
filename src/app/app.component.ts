import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ActionService } from './__services/action.service';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { DatePipe } from './__helpers/date.pipe';
import { TrimPipe } from './__helpers/trim.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DatePipe, TrimPipe, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

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
