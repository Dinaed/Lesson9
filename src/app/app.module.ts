import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchedulerAnimationFrameComponent } from './components/scheduler-animationFrame/scheduler-animationFrame.component';
import { SchedulerAsyncComponent } from './components/scheduler-async/scheduler-async.component';
import { SchedulerQueueComponent } from './components/scheduler-queue/scheduler-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerQueueComponent,
    SchedulerAsyncComponent,
    SchedulerAnimationFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
