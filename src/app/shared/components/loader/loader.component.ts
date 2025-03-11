import { Component, computed } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService){}
  isLoading = computed(() => this.loaderService.isLoading()); // Get loader state
}
