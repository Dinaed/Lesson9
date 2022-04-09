import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { animationFrameScheduler, interval, observeOn, range } from 'rxjs';

@Component({
  selector: 'app-scheduler-animationFrame',
  templateUrl: './scheduler-animationFrame.component.html',
  styleUrls: ['./scheduler-animationFrame.component.css']
})
export class SchedulerAnimationFrameComponent implements OnInit{
 
  


  toggle:boolean = false;

  observable$ = range(0, 10);

  ngOnInit(): void {
  }




  hideBlock(){
    this.toggle = !this.toggle
    this.observable$.pipe(observeOn(animationFrameScheduler)).subscribe(val => console.log(`value is ${val}`));
  } 
}
