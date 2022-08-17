import { Component, OnInit } from '@angular/core';
import { MoviesRestService } from 'src/app/services/movies-rest.service';
import { IMovie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { CounterFacade } from 'src/app/+state/counter.facade';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  movieImageBaseUrl = environment.movieImageBaseUrl

  constructor(private moviesRestService: MoviesRestService,
    private counterFacade: CounterFacade) { }

  ngOnInit(): void {
    this.moviesRestService.getPopularMovies().subscribe((moviesRes) => {
      console.log(moviesRes)
      this.movies = moviesRes.results;
    });
  }

}
