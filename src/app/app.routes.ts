import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';


export const routes: Routes = [
    { path: 'articles', component: AppComponent },
    { path: 'article/:id', component: ArticleComponent },
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
    { path: '**', redirectTo: '/articles', pathMatch: 'full' }
];