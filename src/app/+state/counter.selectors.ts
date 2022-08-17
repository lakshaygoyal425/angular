import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_FEATURE_KEY, State } from './counter.reducer';

// Lookup the 'Counter' feature state managed by NgRx
export const getCounterState = createFeatureSelector<State>(COUNTER_FEATURE_KEY);

export const getCounterValue = createSelector(
    getCounterState,
    (state: State) => state.counterValue
)

export const getMoviesCounts = createSelector(
    getCounterState,
    (state: State) => state.moviesCount
)