import { createReducer, on, Action } from '@ngrx/store';

import * as CounterActions from './counter.actions';

export const COUNTER_FEATURE_KEY = 'counter';

export interface State {
  counterValue: number;
  moviesCount: number;
}

export interface CounterPartialState {
  readonly [COUNTER_FEATURE_KEY]: State;
}

export const initialState: State = {
  counterValue: 100,
  moviesCount: 0,
}

const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment,
    state => {
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
    }
  ),
  on(CounterActions.decrement,
    state => {
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
    }
  ),
  on(CounterActions.setMoviesCount, (state, action) => {
    return {
      ...state,
      moviesCount: action.count
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
