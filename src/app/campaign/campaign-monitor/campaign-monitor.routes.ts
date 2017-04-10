import { RouterModule, Routes } from '@angular/router';
import { CampaignMonitorComponent } from './campaign-monitor.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignMonitorComponent
  }
];

export const routing = RouterModule.forChild(routes);
