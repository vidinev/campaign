import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignNewComponent } from './campaign-new.component';
import { routing } from './campaign-new.routes';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CampaignNewComponent]
})
export class CampaignNewModule { }
