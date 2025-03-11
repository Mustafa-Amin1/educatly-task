import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { BlogCardComponent } from "../blog-card/blog-card.component";

@Component({
  selector: 'app-blog-list-view',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, BlogCardComponent],
  templateUrl: './blog-list-view.component.html',
  styleUrl: './blog-list-view.component.scss'
})
export class BlogListViewComponent {
  constructor(
    private blogService : BlogService
  ) {}
  
  articles$ = this.blogService.articles$;
  loadMoreArticles() {
    this.blogService.loadMore();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
