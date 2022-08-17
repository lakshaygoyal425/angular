import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterFacade } from 'src/app/+state/counter.facade';
import * as CounterActions from '../../+state/counter.actions'

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.scss']
})
export class IncrementorComponent implements OnInit, OnDestroy {

  counter = 0;

  subscriptions = new Subscription();
  // private subs:Subscription[] = [];

  constructor(/*private store: Store*/ private counterFacade: CounterFacade) { }

  ngOnInit(): void {
    // const counterSubscriptions = this.store.subscribe((data:any) => {
    //   console.log('lg -> counter -> ', data.counter);
    //   this.counter = data.counter.counterValue
    // });

    // this.subs.push(counterSubscriptions);

  //   this.subscriptions.add(this.store.subscribe((data:any) => {
  //     console.log('lg -> counter -> ', data.counter);
  //     this.counter = data.counter.counterValue
  //   }));
  // }

  ngOnDestroy(): void {
      // this.subs.forEach(subs => {
      //   subs.unsubscribe()
      // });

      this.subscriptions.unsubscribe();
  }

  increment() {
    // this.counter++;
    // this.store.dispatch(CounterActions.increment());
    this.counterFacade.increment
  }

  decrement() {
    // this.counter--;
    // this.store.dispatch(CounterActions.decrement());
  }

}
