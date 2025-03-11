import { BehaviorSubject, catchError, concatMap, finalize, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { LoaderService } from '../../shared/services/loader.service';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'https://dev.to/api/articles';
  private currentPageSubject = new BehaviorSubject<number>(1);
  private articles: any[] = [];
  private articlesSubject = new BehaviorSubject<any[]>([]);
  articles$ = this.articlesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) {
    this.loadArticles();
  }

  private loadArticles() {
    this.currentPageSubject
      .pipe(
        concatMap((page) => {
          this.loaderService.show();
          return this.http.get<Article[]>(`${this.apiUrl}?page=${page}&per_page=10`).pipe(
            finalize(() => this.loaderService.hide()), 
            catchError((error) => {
              console.error('Error fetching articles:', error);
              return throwError(() => new Error(error.message || 'Failed to load articles'));
            })
          );
        })
      )
      .subscribe({
        next: (newArticles) => {
          this.articles = [...this.articles, ...newArticles];
          this.articlesSubject.next(this.articles);
        },
      });
  }

  loadMore() {
    if (!this.loaderService.isLoading()) {
      this.currentPageSubject.next(this.currentPageSubject.value + 1);
    }
  }
}
