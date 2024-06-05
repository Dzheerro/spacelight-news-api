import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionService } from './__services/action.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  articles: any;
 
  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.actionService.getArticles().subscribe( (response: any) => {
      console.log(response);
      
    })
  }

}
