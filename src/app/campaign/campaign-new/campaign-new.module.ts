import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignNewComponent } from './campaign-new.component';
import { routing } from './campaign-new.routes';
import { ControlMessagesComponent } from '../../shared/control-messages/control-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    CampaignNewComponent,
    ControlMessagesComponent
  ]
})
export class CampaignNewModule { }
