import { RouterModule, Routes } from '@angular/router';
import { CampaignNewComponent } from './campaign-new.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignNewComponent
  }
];

export const routing = RouterModule.forChild(routes);
