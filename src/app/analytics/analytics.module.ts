import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { routing } from './analytics.route';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
