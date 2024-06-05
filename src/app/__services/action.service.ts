import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  baseUrl: string = 'https://api.spaceflightnewsapi.net'

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${this.baseUrl}/v4/articles`);
  }

  getArticleById(id: number) {
    return this.http.get(`${this.baseUrl}/v4/articles/${id}`);
  }
  
}
