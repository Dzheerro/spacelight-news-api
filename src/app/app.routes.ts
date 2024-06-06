import { Routes } from '@angular/router';

import { ArticleComponent } from './__components/article/article.component';
import { NewsComponent } from './__components/news/news.component';


export const routes: Routes = [
    { path: 'articles', component: NewsComponent },
    { path: 'article/:id', component: ArticleComponent },
    
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
    { path: '**', redirectTo: '/articles', pathMatch: 'full' }
];