import { RouterModule, Routes } from '@angular/router';
import { PixelsComponent } from './pixels.component';

const routes: Routes = [
  {
    path: '',
    component: PixelsComponent
  }
];

export const routing = RouterModule.forChild(routes);
