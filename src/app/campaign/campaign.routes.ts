import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign.component';

declare const System;

export function getCampaignNewModule() {
  return System.import('./campaign-new/campaign-new.module')
    .then((mod: any) => mod['CampaignNewModule']);
}

export function getCampaignMonitorModule() {
  return System.import('./campaign-monitor/campaign-monitor.module')
    .then((mod: any) => mod['CampaignMonitorModule']);
}

const routes: Routes = [
  {
    path: '',
    component: CampaignComponent,
    children: [
      {
        path: '',
        loadChildren: getCampaignNewModule
      },
      {
        path: 'monitor',
        loadChildren: getCampaignMonitorModule
      },
    ]
  }
];

export const routing = RouterModule.forChild(routes);

