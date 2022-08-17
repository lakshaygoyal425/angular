import { createAction, props } from '@ngrx/store';
import { count } from 'console';

export const decrement = createAction(
  '[Counter Page] decrement'
);

export const increment = createAction(
  '[Counter Page] increment'
);

export const setMoviesCount = createAction(
  '[Counter Page] set Movies Count',
  props<{ count: number }>()
);