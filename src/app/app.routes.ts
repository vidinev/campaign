import { RouterModule, Routes } from '@angular/router';

declare const System;

export function getCampaignModule() {
  return System.import('./campaign/campaign.module')
    .then((mod: any) => mod['CampaignModule']);
}

export function getAnalyticsModule() {
  return System.import('./analytics/analytics.module')
    .then((mod: any) => mod['AnalyticsModule']);
}

export function getPixelsModule() {
  return System.import('./pixels/pixels.module')
    .then((mod: any) => mod['PixelsModule']);
}

export function getLibraryModule() {
  return System.import('./library/library.module')
    .then((mod: any) => mod['LibraryModule']);
}

const routes: Routes = [
  {
    path: '',
    redirectTo: '/campaign',
    pathMatch: 'full'
},
  {
    path: 'campaign',
    loadChildren: getCampaignModule
  },
  {
    path: 'analytics',
    loadChildren: getAnalyticsModule
  },
  {
    path: 'pixels',
    loadChildren: getPixelsModule
  },
  {
    path: 'library',
    loadChildren: getLibraryModule
  }
];

export const routing = RouterModule.forRoot(routes);
