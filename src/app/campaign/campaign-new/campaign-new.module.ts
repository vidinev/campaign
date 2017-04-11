import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CampaignNewComponent } from './campaign-new.component';
import { routing } from './campaign-new.routes';
import { ControlMessagesComponent } from '../../shared/control-messages/control-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    routing
  ],
  declarations: [
    CampaignNewComponent,
    ControlMessagesComponent
  ]
})
export class CampaignNewModule { }
