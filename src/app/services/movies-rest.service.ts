import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesApiRes } from '../models/movie.model';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class MoviesRestService {

  constructor(private httpClient: HttpClient) { }

  getPopularMovies(page=1):Observable<MoviesApiRes> {
    const url = `${environment.moviesApiBaseUrl}/movie/popular`;
    const params = {
      api_key: environment.moviesApiKey,
      page
    };

    return this.httpClient.get<MoviesApiRes>(url, {params})


  }
}
