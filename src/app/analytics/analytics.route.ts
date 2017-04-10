import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsComponent
  }
];

export const routing = RouterModule.forChild(routes);
