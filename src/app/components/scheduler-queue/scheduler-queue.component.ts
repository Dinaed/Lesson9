import { Component, OnInit } from '@angular/core';
import {  observeOn, queueScheduler, range } from 'rxjs';

@Component({
  selector: 'app-scheduler-queue',
  templateUrl: './scheduler-queue.component.html',
  styleUrls: ['./scheduler-queue.component.css']
})
export class SchedulerQueueComponent implements OnInit {

  observable$ = range(0, 10).pipe(observeOn(queueScheduler));

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('start queueScheduler');    
    }, 1500)
    this.observable$.subscribe((vl) => console.log(`queueScheduler value is ${vl}`));
    setTimeout(() => {
      console.log('fin');    
    }, 2000)

  }
}
