import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../../+state/counter.actions'

@Component({
  selector: 'app-terminator',
  templateUrl: './terminator.component.html',
  styleUrls: ['./terminator.component.scss']
})
export class TerminatorComponent implements OnInit {

  cv = -1;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.subscribe((data:any) => {
      this.cv = data.counter.counterValue
    });
  }

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }

}
