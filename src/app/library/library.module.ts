import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { routing } from './library.route';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LibraryComponent]
})
export class LibraryModule { }
