import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignMonitorComponent } from './campaign-monitor.component';
import { routing } from './campaign-monitor.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CampaignMonitorComponent]
})
export class CampaignMonitorModule { }
