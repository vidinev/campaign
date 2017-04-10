import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign.component';
import { routing } from './campaign.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CampaignComponent]
})
export class CampaignModule { }
