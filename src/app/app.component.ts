import { Component } from '@angular/core';
import { MoviesRestService } from './services/movies-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-demo2';
  moviesCount = 0;

  constructor(private moviesRestService: MoviesRestService) { }

  ngOnInit(): void {
    // this.moviesRestService.getPopularMovies().subscribe((moviesRes) => {
    //   console.log(moviesRes)
    //   this.moviesCount = moviesRes.results.length;
    // });
  }
}
