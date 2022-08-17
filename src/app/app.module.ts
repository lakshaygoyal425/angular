import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementorComponent } from './components/incrementor/incrementor.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromCounter from './+state/counter.reducer';
import { CounterFacade } from './+state/counter.facade';
import { TerminatorComponent } from './components/terminator/terminator.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesRestService } from './services/movies-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    IncrementorComponent,
    TerminatorComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {
      metaReducers: !environment.production ? [] : [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromCounter.COUNTER_FEATURE_KEY, fromCounter.reducer)
  ],
  providers: [CounterFacade, MoviesRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
