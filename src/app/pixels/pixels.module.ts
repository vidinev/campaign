import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelsComponent } from './pixels.component';
import { routing } from './pixels.route';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PixelsComponent]
})
export class PixelsModule { }
