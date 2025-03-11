import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { BlogListViewComponent } from "./components/blog-list-view/blog-list-view.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent, BlogListViewComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
