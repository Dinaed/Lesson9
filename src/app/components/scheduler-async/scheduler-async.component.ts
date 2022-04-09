import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler, asapScheduler, asyncScheduler, observeOn, range } from 'rxjs';

@Component({
  selector: 'app-scheduler-async',
  templateUrl: './scheduler-async.component.html',
  styleUrls: ['./scheduler-async.component.css']
})
export class SchedulerAsyncComponent implements OnInit {

  observable1$ = range(0, 10).pipe(observeOn(asyncScheduler));
  observable2$ = range(10, 20).pipe(observeOn(asapScheduler));
  observable3$ = range(20, 30);
  observable4$ = range(30, 40).pipe(observeOn(animationFrameScheduler));

  constructor() { }

  ngOnInit() {
    console.log('start asyncScheduler');
    this.observable1$.subscribe((vl) => console.log(`async value is ${vl}`));
    console.log('fin asyncScheduler');
    console.log('start asapScheduler');
    this.observable2$.subscribe((vl) => console.log(`asap value is ${vl}`));
    console.log('fin asapScheduler');
    console.log('start without scheduler');
    this.observable3$.subscribe((vl) => console.log(`without scheduler value is ${vl}`));
    console.log('fin without scheduler');
    console.log('start animationFrameScheduler');
    this.observable4$.subscribe((vl) => console.log(`animationFrameScheduler value is ${vl}`));
    console.log('fin animationFrameScheduler');
  }

}
