import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncrementorComponent } from './components/incrementor/incrementor.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {
    path: 'incrementor',
    component: IncrementorComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
