import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

const formBuilder = new FormBuilder();

const formConfiguration = {
  final: ['', [
    Validators.required,
    CustomValidators.url
  ]],
  pages: formBuilder.array([])
};

@Component({
  selector: 'app-campaign-new',
  templateUrl: './campaign-new.component.html',
  styleUrls: ['./campaign-new.component.scss']
})
export class CampaignNewComponent {

  form: FormGroup;

  constructor() {
    this.form = formBuilder.group(formConfiguration);
  }

}
