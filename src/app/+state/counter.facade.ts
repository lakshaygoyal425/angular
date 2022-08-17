import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import * as CounterFeature from './counter.reducer';
import * as CounterSelectors from './counter.selectors';

@Injectable()
export class CounterFacade {

  counterValue$ = this.store.pipe(select(CounterSelectors.getCounterValue));
  
  moviesCount$ = this.store.pipe(select(CounterSelectors.getMoviesCounts));

  constructor(private readonly store: Store) {}


  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  setMoviesCount(count: number) {
    this.store.dispatch(CounterActions.setMoviesCount({count}));
  }
}
